-- CreateEnum
CREATE TYPE "CompetitionType" AS ENUM ('BCC', 'ERC');

-- CreateTable
CREATE TABLE "User" (
    "id" UUID NOT NULL,
    "email" TEXT NOT NULL,
    "teamName" TEXT,
    "submissionLink1" TEXT,
    "submissionLink2" TEXT,
    "createdAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "competitionType" "CompetitionType",

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);
