/*
  Warnings:

  - The primary key for the `feedback_question` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id_feedback_q` on the `feedback_question` table. All the data in the column will be lost.
  - Added the required column `id_feedback` to the `feedback_question` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `feedback_question` DROP PRIMARY KEY,
    DROP COLUMN `id_feedback_q`,
    ADD COLUMN `id_feedback` INTEGER NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`id_feedback`);

-- AlterTable
ALTER TABLE `mgroup` MODIFY `group_description` VARCHAR(1000) NOT NULL;
