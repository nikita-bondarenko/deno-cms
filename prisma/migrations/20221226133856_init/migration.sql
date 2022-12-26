-- CreateTable
CREATE TABLE "Values" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "key" VARCHAR(255) NOT NULL,
    "value" VARCHAR(255) NOT NULL,

    CONSTRAINT "Values_pkey" PRIMARY KEY ("id")
);
