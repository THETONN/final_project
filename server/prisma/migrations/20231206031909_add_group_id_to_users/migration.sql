/*
  Warnings:

  - You are about to drop the `Users` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `Users`;

-- CreateTable
CREATE TABLE `users` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `email` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NULL,
    `password` VARCHAR(191) NOT NULL,
    `role` ENUM('ADMIN', 'USER') NOT NULL DEFAULT 'USER',
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `deletedAt` DATETIME(3) NULL,
    `groupId` INTEGER NULL,

    UNIQUE INDEX `users_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `choice` (
    `id_choice` INTEGER NOT NULL AUTO_INCREMENT,
    `choice` VARCHAR(191) NOT NULL,
    `id_question` INTEGER NOT NULL,

    PRIMARY KEY (`id_choice`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `feedback_question` (
    `id_feedback_q` INTEGER NOT NULL AUTO_INCREMENT,
    `question_feedback` VARCHAR(191) NOT NULL,
    `question_rate` INTEGER NOT NULL,
    `id_recommen` INTEGER NOT NULL,

    PRIMARY KEY (`id_feedback_q`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `mgroup` (
    `id_group` INTEGER NOT NULL AUTO_INCREMENT,
    `group_name` VARCHAR(191) NOT NULL,
    `group_description` VARCHAR(191) NOT NULL,
    `image` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id_group`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `questionnaire` (
    `id_question` INTEGER NOT NULL AUTO_INCREMENT,
    `question_topic` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id_question`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `recommendation` (
    `id_recommen` INTEGER NOT NULL AUTO_INCREMENT,
    `id_group` INTEGER NOT NULL,
    `id_users` INTEGER NOT NULL,

    PRIMARY KEY (`id_recommen`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `responses` (
    `id_responses` INTEGER NOT NULL AUTO_INCREMENT,
    `id_users` INTEGER NOT NULL,
    `id_choice` INTEGER NOT NULL,

    PRIMARY KEY (`id_responses`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `trip` (
    `id_trip` INTEGER NOT NULL AUTO_INCREMENT,
    `trip_name` VARCHAR(191) NOT NULL,
    `trip_description` VARCHAR(191) NOT NULL,
    `id_group` INTEGER NOT NULL,

    PRIMARY KEY (`id_trip`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
