"use client";

import React, { useState, useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { Upload, FileText, CheckCircle, AlertCircle, Download, LogOut } from "lucide-react"; // Add LogOut icon
import { useUploadThing } from "@/utils/uploadthing/uploadthing";
import { useUserStore } from "@/stores/userStore";
import { useInitializeUserStore } from "@/hooks/useInitializeUserStore";
import { useRouter } from "next/navigation";

const Dashboard = () => {
  const [uploadError, setUploadError] = useState<string | null>(null);
  const [uploadSuccess, setUploadSuccess] = useState<{ [key: number]: boolean }>({
    1: false,
    2: false
  });
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState<{ [key: number]: File | null }>({
    1: null,
    2: null
  });
  const [uploadingSlots, setUploadingSlots] = useState<{ [key: number]: boolean }>({
    1: false,
    2: false
  });
  const router = useRouter();

  useInitializeUserStore();
  
  const { user, userProfile, isLoading, refreshUser, logout } = useUserStore();

  const getUploadConfig = () => {
    const competitionType = userProfile?.competitionType;
    
    if (competitionType === 'BCC') {
      return {
        uploads: [
          { id: 1, name: 'Slide Deck', required: true }
        ]
      };
    } else if (competitionType === 'ERC') {
      return {
        uploads: [
          { id: 1, name: 'Paper', required: true },
          { id: 2, name: 'Valuation', required: true }
        ]
      };
    }
    
    return {
      uploads: [
        { id: 1, name: 'Submission', required: true }
      ]
    };
  };

  const uploadConfig = getUploadConfig();

  const createUploadInstance = (slotId: number) => {
    return useUploadThing("submissionUploader", {
      onClientUploadComplete: (res) => {
        console.log(`Files uploaded for slot ${slotId}:`, res);
        setUploadSuccess(prev => ({ ...prev, [slotId]: true }));
        setUploadError(null);
        setSelectedFiles(prev => ({ ...prev, [slotId]: null }));
        setUploadingSlots(prev => ({ ...prev, [slotId]: false }));
        refreshUser();
        setTimeout(() => {
          setUploadSuccess(prev => ({ ...prev, [slotId]: false }));
        }, 5000);
      },
      onUploadError: (error: Error) => {
        console.error(`Upload error for slot ${slotId}:`, error);
        setUploadError(`${uploadConfig.uploads.find(u => u.id === slotId)?.name}: ${error.message}`);
        setUploadingSlots(prev => ({ ...prev, [slotId]: false }));
        setTimeout(() => setUploadError(null), 5000);
      },
    });
  };

  const uploadInstances = {
    1: createUploadInstance(1),
    2: createUploadInstance(2)
  };


  const handleFileChange = (slotId: number) => (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 32 * 1024 * 1024) {
        setUploadError("File size must be less than 16MB");
        setTimeout(() => setUploadError(null), 5000);
        return;
      }
      
      const allowedTypes = ['application/pdf'];
      
      if (!allowedTypes.includes(file.type)) {
        setUploadError("Please select a PDF file");
        setTimeout(() => setUploadError(null), 5000);
        return;
      }
      
      setSelectedFiles(prev => ({ ...prev, [slotId]: file }));
      setUploadError(null);
    }
  };

  const handleSubmit = (slotId: number) => async (e: React.FormEvent) => {
    e.preventDefault();
    
    const selectedFile = selectedFiles[slotId];
    if (!selectedFile) {
      setUploadError("Please select a file first");
      setTimeout(() => setUploadError(null), 5000);
      return;
    }

    setUploadingSlots(prev => ({ ...prev, [slotId]: true }));
    setUploadError(null);
    
    try {
      const fileWithSlotInfo = new File(
      [selectedFile], 
      `slot${slotId}_${selectedFile.name}`, 
      { type: selectedFile.type }
    );
      await uploadInstances[slotId as 1 | 2].startUpload([fileWithSlotInfo]);
    } catch (error) {
      console.error("Upload failed:", error);
      setUploadError("Upload failed. Please try again.");
      setUploadingSlots(prev => ({ ...prev, [slotId]: false }));
      setTimeout(() => setUploadError(null), 5000);
    }
  };

  const handleLogout = async () => {
    try {
      setIsLoggingOut(true);
      router.push('/');
      await logout()
      refreshUser(); 
    } catch (err) {
      console.error('Logout error:', err);
    } finally {
      setIsLoggingOut(false);
    }
  }

  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: true,
    });
  }, []);

  if (isLoading) {
    return (
      <div className="relative h-screen w-full isolate overflow-hidden flex items-center justify-center">
        <div className="text-white text-xl">Loading...</div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="relative h-screen w-full isolate overflow-hidden flex items-center justify-center">
        <div className="text-white text-xl">Please log in to access the dashboard</div>
      </div>
    );
  }

   return (
    <div className="relative z-10 flex min-h-screen w-full flex-col items-center justify-center text-center text-white p-4 pt-24">
      <div className="w-full max-w-4xl mx-auto mb-8 flex justify-center items-center" data-aos="fade-down">
        <h1 className="bg-gradient-to-b from-white via-[#C899FF] to-white text-transparent text-center bg-clip-text font-bold text-5xl">
          Dashboard
        </h1>
      </div>

      <div className="w-full max-w-4xl mx-auto mb-8" data-aos="fade-up">
        <div className="bg-[#240046]/80 backdrop-blur-lg p-6 rounded-2xl border border-white/20 shadow-2xl">
          <div className="flex justify-between items-start mb-4">
            <h2 className="text-2xl font-bold bg-gradient-to-b from-white via-[#C899FF] to-white text-transparent bg-clip-text">
              Welcome, {userProfile?.teamName || user.email}
            </h2>
            <button
              onClick={handleLogout}
              disabled={isLoggingOut}
              className="flex items-center gap-2 px-3 py-1 bg-red-600/80 hover:bg-red-700/80 rounded-lg transition-colors text-sm disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <LogOut className="w-3 h-3" />
              {isLoggingOut ? 'Logging out...' : 'Logout'}
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left">
            <div>
              <p className="text-white/60 text-sm">Email</p>
              <p className="text-white font-medium">{user.email}</p>
            </div>
            <div>
              <p className="text-white/60 text-sm">Team Name</p>
              <p className="text-white font-medium">{userProfile?.teamName || 'N/A'}</p>
            </div>
            <div>
              <p className="text-white/60 text-sm">Competition Type</p>
              <p className="text-white font-medium">{userProfile?.competitionType || 'N/A'}</p>
            </div>
          </div>
        </div>
      </div>

      {uploadConfig.uploads.map((uploadItem, index) => (
        <div key={uploadItem.id} className="w-full max-w-4xl mx-auto mb-8" data-aos="fade-up" data-aos-delay={200 + (index * 100)}>
          <div className="bg-[#240046]/80 backdrop-blur-lg p-8 rounded-2xl border border-white/20 shadow-2xl">
            <h3 className="text-xl font-bold mb-6 text-left">
              Submit {uploadItem.name}
              {uploadItem.required && <span className="text-red-400 ml-1">*</span>}
            </h3>
            
            <form onSubmit={handleSubmit(uploadItem.id)} className="space-y-6">
              <label htmlFor={`file-upload-${uploadItem.id}`} className="cursor-pointer">
                <div className="border-2 border-dashed border-white/30 rounded-xl p-8 transition-colors hover:border-white/50 bg-transparent">
                  <div className="flex flex-col items-center space-y-4">
                    <Upload className="w-12 h-12 text-white/60" />
                    <div className="text-center">
                      <span className="text-white text-lg mb-2 block">
                        {selectedFiles[uploadItem.id] ? selectedFiles[uploadItem.id]!.name : `Choose your ${uploadItem.name.toLowerCase()}`}
                      </span>
                      <span className="text-white/60 text-sm">
                        PDF (Max 16MB)
                      </span>
                      <input
                        id={`file-upload-${uploadItem.id}`}
                        type="file"
                        className="hidden"
                        accept=".pdf"
                        onChange={handleFileChange(uploadItem.id)}
                        disabled={uploadingSlots[uploadItem.id]}
                      />
                    </div>
                    {selectedFiles[uploadItem.id] && (
                      <div className="text-center">
                        <p className="text-green-200 text-sm">
                          Selected: {selectedFiles[uploadItem.id]!.name}
                        </p>
                        <p className="text-white/60 text-xs">
                          Size: {(selectedFiles[uploadItem.id]!.size / (1024 * 1024)).toFixed(2)} MB
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </label>
              <div className="flex justify-center">
                <button
                  type="submit"
                  disabled={!selectedFiles[uploadItem.id] || uploadingSlots[uploadItem.id]}
                  className="flex items-center mt-4 gap-2 bg-purple-600 hover:bg-purple-700 disabled:bg-purple-600/50 disabled:cursor-not-allowed px-8 py-3 rounded-lg text-white font-medium transition-colors"
                >
                  <Upload className="w-4 h-4" />
                  {uploadingSlots[uploadItem.id] ? 'Uploading...' : `Submit ${uploadItem.name}`}
                </button>
              </div>
            </form>

            {/* Success message for this slot */}
            {uploadSuccess[uploadItem.id] && (
              <div className="flex items-center gap-2 mt-4 p-3 bg-green-500/20 border border-green-500/50 rounded-lg">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span className="text-green-200">{uploadItem.name} uploaded successfully!</span>
              </div>
            )}
          </div>
        </div>
      ))}

      {uploadError && (
        <div className="w-full max-w-4xl mx-auto mb-8">
          <div className="flex items-center gap-2 p-3 bg-red-500/20 border border-red-500/50 rounded-lg">
            <AlertCircle className="w-5 h-5 text-red-400" />
            <span className="text-red-200">{uploadError}</span>
          </div>
        </div>
      )}

      <div className="w-full max-w-4xl mx-auto" data-aos="fade-up" data-aos-delay="400">
        <div className="bg-[#240046]/80 backdrop-blur-lg p-6 rounded-2xl border border-white/20 shadow-2xl">
          <h3 className="text-xl font-bold mb-4 text-left">Submission Status</h3>
          <div className="space-y-4">
            {uploadConfig.uploads.map((uploadItem) => {
              const submissionLink = uploadItem.id === 1 ? userProfile?.submissionLink1 : userProfile?.submissionLink2;
              return (
                <div key={uploadItem.id} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <FileText className="w-6 h-6 text-white/60" />
                    <div>
                      <p className="text-white font-medium">
                        {uploadItem.name}: {submissionLink ? 'Submitted' : 'Not Submitted'}
                      </p>
                      <p className="text-white/60 text-sm">
                        {submissionLink ? 'File has been received' : `Please upload your ${uploadItem.name.toLowerCase()}`}
                      </p>
                    </div>
                  </div>
                  {submissionLink && (
                    <a
                      href={submissionLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg transition-colors"
                    >
                      <Download className="w-4 h-4" />
                      View File
                    </a>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;