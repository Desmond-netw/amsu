"use server";

import { PrismaClient, UtilityRole, SafetyStatus } from "@prisma/client";
import { revalidatePath } from "next/cache";

const prisma = new PrismaClient();

// Structural shape mapping database inputs safely
export interface StaffInput {
  id?: string;
  name: string;
  age: number;
  profilePhoto?: string;
  role: UtilityRole;
  email: string;
  phone: string;
  safetyStatus: SafetyStatus;
  assignedVehicle?: string;
}

// 1. Create or Update (Upsert) Personnel Record
export async function saveStaffAction(data: StaffInput) {
  try {
    const record = await prisma.staff.upsert({
      where: { id: data.id || "new-record-uuid-placeholder" },
      update: {
        name: data.name,
        age: data.age,
        role: data.role,
        email: data.email,
        phone: data.phone,
        safetyStatus: data.safetyStatus,
        assignedVehicle: data.assignedVehicle || null,
      },
      create: {
        name: data.name,
        age: data.age,
        role: data.role,
        email: data.email,
        phone: data.phone,
        safetyStatus: data.safetyStatus,
        assignedVehicle: data.assignedVehicle || null,
        certifications: ["Field Safety Induction"], // Default starting value
      },
    });

    revalidatePath("/staff"); // Clears the Next.js cache to immediately display fresh database rows
    return { success: true, data: record };
  } catch (error: any) {
    console.error("Database Save Failure:", error);
    return {
      success: false,
      error: error.message || "Failed to commit operational data.",
    };
  }
}

// 2. Toggle Lifecycle Archival Flag
export async function toggleArchiveStaffAction(
  id: string,
  currentArchiveState: boolean,
) {
  try {
    await prisma.staff.update({
      where: { id },
      data: { isArchived: !currentArchiveState },
    });
    revalidatePath("/staff");
    return { success: true };
  } catch (error) {
    return { success: false, error: "Failed to update archival logs." };
  }
}
