"use server";

import { revalidatePath } from "next/cache";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export interface AnnouncementInput {
  category: string;
  tagColor: string;
  title: string;
  desc: string;
}

// 1. Create
export async function createAnnouncement(data: AnnouncementInput) {
  try {
    await prisma.announcement.create({ data });
    revalidatePath("/");
    revalidatePath("/myAMSU/announcements");
    return { success: true };
  } catch (err) {
    console.error(err);
    return { success: false };
  }
}

// 2. Update
export async function updateAnnouncement(id: string, data: AnnouncementInput) {
  try {
    await prisma.announcement.update({
      where: { id },
      data,
    });
    revalidatePath("/");
    revalidatePath("/myAMSU/announcements");
    return { success: true };
  } catch (err) {
    console.error(err);
    return { success: false };
  }
}

// 3. Delete
export async function deleteAnnouncement(id: string) {
  try {
    await prisma.announcement.delete({ where: { id } });
    revalidatePath("/");
    revalidatePath("/myAMSU/announcements");
    return { success: true };
  } catch (err) {
    console.error(err);
    return { success: false };
  }
}
