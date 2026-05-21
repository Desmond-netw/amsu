/*
  Warnings:

  - You are about to drop the `Request` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "RequestStatus" AS ENUM ('In Progress', 'On Hold', 'Completed');

-- DropForeignKey
ALTER TABLE "Customer" DROP CONSTRAINT "Customer_requestId_fkey";

-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_requestId_fkey";

-- DropTable
DROP TABLE "Request";

-- CreateTable
CREATE TABLE "requests" (
    "id" TEXT NOT NULL,
    "fullName" TEXT NOT NULL,
    "serviceRequired" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "facilityType" TEXT NOT NULL,
    "preferredDate" TIMESTAMP(3) NOT NULL,
    "description" TEXT NOT NULL,
    "attachmentUrl" TEXT,
    "status" "RequestStatus" NOT NULL DEFAULT 'In Progress',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "requests_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_requestId_fkey" FOREIGN KEY ("requestId") REFERENCES "requests"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Customer" ADD CONSTRAINT "Customer_requestId_fkey" FOREIGN KEY ("requestId") REFERENCES "requests"("id") ON DELETE SET NULL ON UPDATE CASCADE;
