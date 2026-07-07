-- CreateEnum
CREATE TYPE "UtilityRole" AS ENUM ('PLUMBER', 'ELECTRICIAN', 'FIELD_ENGINEER', 'SITE_SUPERVISOR', 'SAFETY_INSPECTOR', 'TREATMENT_PLANT_OPERATOR');

-- CreateEnum
CREATE TYPE "SafetyStatus" AS ENUM ('CLEARED', 'PENDING_REVIEW', 'SUSPENDED');

-- CreateTable
CREATE TABLE "staff" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "profilePhoto" TEXT NOT NULL DEFAULT '/assets/staff/default.jpg',
    "role" "UtilityRole" NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "certifications" TEXT[],
    "safetyStatus" "SafetyStatus" NOT NULL DEFAULT 'PENDING_REVIEW',
    "assignedVehicle" TEXT,
    "isArchived" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "staff_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "staff_email_key" ON "staff"("email");
