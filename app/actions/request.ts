"use server";

import { revalidatePath } from "next/cache";
import { PrismaClient, RequestStatus } from "@prisma/client";

const prisma = new PrismaClient();
// strict interface for the form data
export interface CreateRequestInput {
  fullName: string;
  serviceRequired: string;
  phone: string;
  location: string;
  facilityType: string;
  preferredDate: string | Date;
  description: string;
  attachmentUrl?: string | null;
}

// Action 1: Create a brand new submission from the customer form
export async function createRequest(formData: CreateRequestInput) {
  try {
    await prisma.request.create({
      data: {
        fullName: formData.fullName,
        serviceRequired: formData.serviceRequired,
        phone: formData.phone,
        location: formData.location,
        facilityType: formData.facilityType,
        preferredDate: new Date(formData.preferredDate),
        description: formData.description,
        attachmentUrl: formData.attachmentUrl,
        statusComment: null, // Initialize with null or empty string
        status: "IN_PROGRESS", // Enforces your initial state rule
      },
    });

    revalidatePath("/myAMSU/activeOperationPage");
    return { success: true };
  } catch (error) {
    console.error("Failed to create request:", error);
    return { success: false, error: "Database transaction failed." };
  }
}

// Action 2: Mutate the status of a request (Triggers page re-routing automatically)
export async function updateRequestStatus(
  id: string,
  status: RequestStatus,
  comment?: string,
) {
  try {
    await prisma.request.update({
      where: { id },
      data: { status, statusComment: comment, statusUpdatedAt: new Date() },
    });

    // Revalidate all pages tracking this status changes
    revalidatePath("/myAMSU/activeOperationPage");
    revalidatePath("/myAMSU/pendingRequests");
    revalidatePath("/myAMSU/recentProjects");

    return { success: true };
  } catch (error) {
    console.error("Failed to alter request status:", error);
    return { success: false };
  }
}
