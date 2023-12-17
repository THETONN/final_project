-- CreateTable
CREATE TABLE `users` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `email` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NULL,
    `password` VARCHAR(191) NOT NULL,
    `role` ENUM('ADMIN', 'USER') NOT NULL DEFAULT 'USER',
    `group` INTEGER NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `deletedAt` DATETIME(3) NULL,
    `groupId` INTEGER NULL,
    `feedback` VARCHAR(191) NULL,

    UNIQUE INDEX `users_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `answers_users` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_users` VARCHAR(191) NOT NULL,
    `age` VARCHAR(191) NOT NULL,
    `education` VARCHAR(191) NOT NULL,
    `income` VARCHAR(191) NOT NULL,
    `household` VARCHAR(191) NOT NULL,
    `after_freq` VARCHAR(191) NOT NULL,
    `after_person` VARCHAR(191) NOT NULL,
    `after_expenditure` VARCHAR(191) NOT NULL,
    `after_day_travel` VARCHAR(191) NOT NULL,
    `gender` VARCHAR(191) NOT NULL,
    `occupation` VARCHAR(191) NOT NULL,
    `per_vehicle` VARCHAR(191) NOT NULL,
    `status` VARCHAR(191) NOT NULL,
    `per_region` VARCHAR(191) NOT NULL,
    `after_season` VARCHAR(191) NOT NULL,
    `after_type` VARCHAR(191) NOT NULL,
    `after_region` VARCHAR(191) NOT NULL,
    `after_vehicle` VARCHAR(191) NOT NULL,
    `after_period_time` VARCHAR(191) NOT NULL,
    `after_want_travel` VARCHAR(191) NOT NULL,
    `groups` INTEGER NOT NULL,

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
    `id_feedback` INTEGER NOT NULL AUTO_INCREMENT,
    `question_feedback` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id_feedback`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `mgroup` (
    `id_group` INTEGER NOT NULL AUTO_INCREMENT,
    `group_name` VARCHAR(191) NOT NULL,
    `group_description` VARCHAR(1000) NOT NULL,
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
CREATE TABLE `users_ratings` (
    `id_feed` INTEGER NOT NULL AUTO_INCREMENT,
    `id_users` INTEGER NOT NULL,
    `Q1` INTEGER NOT NULL,
    `Q2` INTEGER NOT NULL,
    `Q3` INTEGER NOT NULL,
    `Q4` INTEGER NOT NULL,
    `Q5` INTEGER NOT NULL,
    `groupId` INTEGER NOT NULL,

    PRIMARY KEY (`id_feed`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;


INSERT INTO `choice` (`id_choice`, `choice`, `id_question`) VALUES
(1, '20 yesrs old or less', 1),
(2, '21-30 years old', 1),
(3, '31-40 years old', 1),
(4, '41-50 years old', 1),
(5, '51-60 years old', 1),
(6, 'Over 60 years old', 1),
(7, 'Under bachelor\'s degree', 2),
(8, 'Bachelor\'s degree or equivalent', 2),
(9, 'Master\'s degree', 2),
(10, 'Less than 15,000 THB', 3),
(11, '15,000 - 30,000 THB', 3),
(12, '30,001 - 45,000 THB', 3),
(13, '45,001 - 60,000 THB', 3),
(14, 'More than 60,000 THB', 3),
(15, '1 person', 4),
(16, '2-3 people', 4),
(17, '4-5 people', 4),
(18, 'More than 5 people', 4),
(19, 'Less than 2 times/year', 5),
(20, '2-3 times/year', 5),
(21, '4-5 times/year', 5),
(22, 'More than 5 times/year', 5),
(23, 'none', 6),
(24, '1-2 people', 6),
(25, '3-4 people', 6),
(26, '5 people', 6),
(27, 'More than 5 people', 6),
(28, 'Lower than 500 THB', 7),
(29, '501-1500 THB', 7),
(30, '1501-2500 THB', 7),
(31, '2501-3500 THB', 7),
(32, 'More than 3500 THB', 7),
(33, '1 day', 8),
(34, '1-2 days', 8),
(35, '3-4 days', 8),
(36, 'More than 4 days', 8),
(37, 'Male', 9),
(38, 'Female', 9),
(39, 'Alternative', 9),
(40, 'Student', 10),
(41, 'Business owner', 10),
(42, 'Government officer', 10),
(43, 'Private company employee', 10),
(44, 'Housewife/Househusband', 10),
(45, 'Employee', 10),
(46, 'Farmer', 10),
(47, 'Freelancer', 10),
(48, 'Others', 10),
(49, 'private car', 11),
(50, 'motorcycle', 11),
(51, 'other', 11),
(52, 'none', 11),
(53, 'Single', 12),
(54, 'Married', 12),
(55, 'Prefer not to answer', 12),
(56, 'Central', 13),
(57, 'North', 13),
(58, 'South', 13),
(59, 'NorthEast', 13),
(60, 'Eastern', 13),
(61, 'Western', 13),
(62, 'Hot season', 14),
(63, 'Rainy season', 14),
(64, 'Cold season', 14),
(65, 'Natural sights destination (beaches, mountains, waterfalls, etc.)', 15),
(66, 'Historical destination (temples, historical parks, museums, etc.)', 15),
(67, 'Cultural destination (floating markets, traditional festivals, cultural performances, etc.)', 15),
(68, 'Recreational destinations (entertainment venues, amusement parks, zoos, shopping malls, concerts, etc.)', 15),
(69, 'Ethnic destinations (Karen village, coffee planting workshop, homestay, etc.)', 15),
(70, 'Business destinations (seminars, business negotiations, meetings, etc.)', 15),
(71, 'Central', 16),
(72, 'North', 16),
(73, 'South', 16),
(74, 'NorthEast', 16),
(75, 'Eastern', 16),
(76, 'Western', 16),
(77, 'Private car', 17),
(78, 'Motorcycle', 17),
(79, 'Public transportations', 17),
(80, 'Airplane', 17),
(81, 'Train', 17),
(82, 'Passenger ship', 17),
(83, 'Weekends (Saturday-Sunday)', 18),
(84, 'Weekdays (Monday-Friday)', 18),
(85, 'Holidays', 18),
(86, 'I’d love to', 19),
(87, 'I’m not sure', 19),
(88, 'Definitely not!', 19);

INSERT INTO `feedback_question` (`id_feedback`, `question_feedback`) VALUES
(1, 'hi'),
(2, 'How well did our recommended tour package align with your personal interests and preferences?'),
(3, 'Question 3: Did you find the recommended tour appealing based on your personal preferences?'),
(4, 'Question 4: How well did our recommended tour package align with your personal interests and preferences?'),
(5, 'Question 5: How well did our recommended tour package align with your personal interests and preferences?');

INSERT INTO `mgroup` (`id_group`, `group_name`, `group_description`, `image`) VALUES
(1, 'Group1', 'Their age ranges from 21 to 40 years, with educational qualifications typically at the bachelor\'s degree level or lower. They are primarily private sector employees, including students, with monthly incomes falling within the range of 15,000 to 30,000 Baht. Most members in this group do not have personal vehicles and only a few members own motorcycles. They are mostly single, and their households typically consist of 2 - 3 people. They express a desire to travel to the northern and central regions of Thailand, with a budget ranging from 500 to 2,500 Baht per person.', '/public/images/Cluster1.jpg'),
(2, 'Group2', 'This cluster mainly consists of the working age group, aged 31 to 60. The education background bachelor’s degrees to advanced degrees. The income typically falls within the range of 30,000 to more than 60,000 Baht per month. They mostly own private cars and prefer to use them for traveling. Their hometowns are primarily located in central Thailand. The majority are married, and their households typically consist of 4 - 5 people. They express a desire to travel for 3 - 4 days per trip, with 2 - 3 trips per year. The preferred travel region is mainly central Thailand, with a budget of more than 3,500 baht per person.', '/public/images/Cluster2.jpg'),
(3, 'Group3', 'This cluster mainly consists of college students or recent graduates aged around 21 to 30 years old. Most have bachelor’s degrees in education. Their income is mostly less than 15,000 Baht per month. They own motorcycles or other vehicles, but they tend to use private cars or airplanes for travel. The majority of their hometown is located in the southern region and a minority is located in the northern region of Thailand. The majority are single, and households typically contain 4 or more people. They express a desire to travel for 3 - 4 days per trip, with two to more than 5 trips per year. The regions they want to explore are the north and south of Thailand, with a budget exceeding 3,500 Baht per person.', '/public/images/Cluster3.jpg');

INSERT INTO `questionnaire` (`id_question`, `question_topic`) VALUES
(1, 'Age'),
(2, 'Education level'),
(3, 'Income (monthly)'),
(4, 'Household size (including the respondent)'),
(5, 'The frequency of domestic traveling'),
(6, 'The average number of travel companions'),
(7, 'The average travel expenditures per 1 round trip per person'),
(8, 'The average days for traveling per 1 round trip'),
(9, 'Gender'),
(10, 'Occupation'),
(11, 'Vehicle ownership'),
(12, 'Status'),
(13, 'Your residential region'),
(14, 'The preferred season for traveling'),
(15, 'The preferred types of tourism destinations'),
(16, 'The preferred region of traveling'),
(17, 'The preference type of vehicle for traveling'),
(18, 'The preferred period of traveling'),
(19, 'Do you still want to travel after the end of the COVID-19 pandemic');



