import { NextRequest, NextResponse } from "next/server";
import { google } from "googleapis";
import { Readable } from "stream";

// --- FUNGSI HELPER ---

/**
 * Mengunggah satu file ke folder Google Drive yang ditentukan.
 * Menerima objek File standar dari Web API.
 * @returns Link yang dapat dilihat publik untuk file yang diunggah.
 */
async function uploadFileToDrive(
  file: File,
  folderId: string
): Promise<string | null> {
  if (!file) return null;
  const privateKey = Buffer.from(
    process.env.GOOGLE_PRIVATE_KEY_BASE64 || "",
    "base64"
  ).toString("utf8");
  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      private_key: privateKey.replace(/\\n/g, "\n"),
    },
    scopes: ["https://www.googleapis.com/auth/drive"],
  });

  const drive = google.drive({ version: "v3", auth });

  const fileMetadata = {
    name: `${Date.now()}-${file.name}`,
    parents: [folderId],
  };

  // Mengubah file menjadi buffer, lalu menjadi stream yang bisa dibaca
  const buffer = Buffer.from(await file.arrayBuffer());
  const stream = Readable.from(buffer);

  const response = await drive.files.create({
    requestBody: fileMetadata,
    media: {
      mimeType: file.type,
      body: stream,
    },
    fields: "id, webViewLink",
  });

  return response.data.webViewLink || null;
}

// --- HANDLER UTAMA API ROUTE ---

export async function POST(req: NextRequest) {
  try {
    // PERBAIKAN KUNCI: Menggunakan req.formData() yang merupakan cara standar
    // di Next.js App Router untuk menangani multipart/form-data.
    const formData = await req.formData();

    const competitionType = formData.get("competitionType") as string;
    const folderId =
      competitionType === "BCC"
        ? process.env.GOOGLE_DRIVE_FOLDER_ID_BCC
        : process.env.GOOGLE_DRIVE_FOLDER_ID_ERC;

    if (!folderId) {
      throw new Error("Folder ID Google Drive tidak dikonfigurasi.");
    }

    // Mengumpulkan semua promise pengunggahan file
    const fileUploadPromises: Promise<{ key: string; link: string | null }>[] =
      [];
    const fields: { [key: string]: string } = {};
    const fileLinkKeys: { [key: string]: string } = {};

    // Memisahkan antara field teks dan file dari formData
    for (const [key, value] of formData.entries()) {
      if (value instanceof File) {
        // Jika ini adalah file, tambahkan ke daftar promise untuk diunggah
        fileUploadPromises.push(
          uploadFileToDrive(value, folderId).then((link) => ({
            key: `Link${key.charAt(0).toUpperCase() + key.slice(1)}`,
            link: link,
          }))
        );
      } else {
        // Jika ini adalah field teks, simpan nilainya
        fields[key] = value;
      }
    }

    // Menjalankan semua pengunggahan file secara paralel
    const uploadedFiles = await Promise.all(fileUploadPromises);

    // Mengubah array hasil menjadi satu objek link
    const fileLinks = uploadedFiles.reduce((acc, { key, link }) => {
      acc[key] = link || "Gagal Unggah";
      return acc;
    }, {} as Record<string, string>);
    const privateKey = Buffer.from(
      process.env.GOOGLE_PRIVATE_KEY_BASE64 || "",
      "base64"
    ).toString("utf8");
    // console.log(privateKey);
    // Menyiapkan koneksi ke Google Sheets
    const sheets = google.sheets({
      version: "v4",
      auth: new google.auth.GoogleAuth({
        credentials: {
          client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
          private_key: privateKey.replace(/\\n/g, "\n"),
        },
        scopes: ["https://www.googleapis.com/auth/spreadsheets"],
      }),
    });

    const spreadsheetId = process.env.GOOGLE_SHEET_ID;
    const timestamp = new Date().toLocaleString("id-ID", {
      timeZone: "Asia/Jakarta",
    });

    // Urutan kolom harus SAMA PERSIS dengan di Google Sheet Anda
    const newRow = [
      timestamp,
      fields.competitionType || "",
      fields.namaKelompok || "",
      fields.metodePembayaran || "",
      fileLinks.LinkBuktiPembayaran || "",
      fields.namaKetua || "",
      fields.emailKetua || "",
      fields.hpKetua || "",
      fields.univKetua || "",
      fileLinks.LinkKtmKetua || "",
      fileLinks.LinkTwibbonKetua || "",
      fileLinks.LinkFollowKetua || "",
      fields.namaAnggota1 || "",
      fields.hpAnggota1 || "",
      fields.univAnggota1 || "",
      fileLinks.LinkKtmAnggota1 || "",
      fileLinks.LinkTwibbonAnggota1 || "",
      fileLinks.LinkFollowAnggota1 || "",
      fields.namaAnggota2 || "",
      fields.hpAnggota2 || "",
      fields.univAnggota2 || "",
      fileLinks.LinkKtmAnggota2 || "",
      fileLinks.LinkTwibbonAnggota2 || "",
      fileLinks.LinkFollowAnggota2 || "",
    ];

    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: "Sheet1!A1",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [newRow],
      },
    });

    return NextResponse.json(
      { message: "Pendaftaran berhasil!" },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("API Error:", error);
    return NextResponse.json(
      { message: error.message || "Terjadi kesalahan pada server." },
      { status: 500 }
    );
  }
}
