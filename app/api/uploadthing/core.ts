import { createUploadthing, type FileRouter } from "uploadthing/next";
import { createClient } from "@/utils/supabase/server";
 
const f = createUploadthing();
 
export const ourFileRouter = {
  submissionUploader: f({ 
    pdf: { maxFileSize: "32MB" }
  })
    .middleware(async ({ req }) => {
      const supabase = await createClient();
      const { data: { user }, error } = await supabase.auth.getUser();
 
      if (error || !user) {
        throw new Error("Unauthorized");
      }
 
      return { userId: user.id };
    })
    .onUploadComplete(async ({ metadata, file }) => {
      
      let slot = 1;
      if (file.name.startsWith('slot1_')) {
        slot = 1;
      } else if (file.name.startsWith('slot2_')) {
        slot = 2;
      }

      // Update user's submissionLink in database
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/api/user/submission`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ 
            userId: metadata.userId,
            submissionLink: file.ufsUrl, 
            slot: slot
          }),
        });

        if (!response.ok) {
          console.error('Failed to update submission link in database');
        }
      } catch (error) {
        console.error('Error updating submission link:', error);
      }

      return { uploadedBy: metadata.userId, url: file.ufsUrl, slot };
    }),
} satisfies FileRouter;
 
export type OurFileRouter = typeof ourFileRouter;