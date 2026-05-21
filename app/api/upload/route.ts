import { NextResponse } from "next/server";
import { writeFile, mkdir } from "fs/promises";
import { join } from "path";

export async function POST(request: Request) {
  try {
    const data = await request.formData();
    const file: File | null = data.get("file") as unknown as File;

    if (!file) {
      return NextResponse.json(
        { success: false, message: "No file uploaded" },
        { status: 400 },
      );
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Create a unique filename to avoid collisions
    const uniqueFilename = `${Date.now()}-${file.name.replace(/\s+/g, "_")}`;
    const relativePath = join("/uploads", uniqueFilename);
    const absoluteUploadDir = join(process.cwd(), "public", "uploads");

    // Ensure the folder exists
    await mkdir(absoluteUploadDir, { recursive: true });

    // Save the file to disk
    await writeFile(join(absoluteUploadDir, uniqueFilename), buffer);

    return NextResponse.json({ success: true, url: relativePath });
  } catch (error) {
    console.error("Upload error:", error);
    return NextResponse.json(
      { success: false, message: "Upload failed" },
      { status: 500 },
    );
  }
}
