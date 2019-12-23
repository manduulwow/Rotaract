-- phpMyAdmin SQL Dump
-- version 4.9.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 23, 2019 at 06:38 AM
-- Server version: 10.4.8-MariaDB
-- PHP Version: 7.3.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `rotaract_rotaract_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `club`
--

CREATE TABLE `club` (
  `id` int(11) NOT NULL,
  `name` varchar(100) DEFAULT NULL,
  `introduction` longtext DEFAULT NULL,
  `charterDate` datetime DEFAULT NULL,
  `club_page_img_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `club`
--

INSERT INTO `club` (`id`, `name`, `introduction`, `charterDate`, `club_page_img_id`) VALUES
(1, 'Ulaanbaatar', 'Tsast Rotaract Club is one of the youngest Rotaract Club in Mongolia which established in 2017. We are currently operating with 34 members, 9 projects, 2 ongoing projects under support of Rotary club UB Central.', '2017-01-19 00:00:00', 24),
(5, 'Tsast', 'For more than 110 years, we’ve bridged cultures and connected continents to champion peace, fight illiteracy and poverty, promote clean water and sanitation, and fight disease.We take action locally and globally\n\nEach day, our members pour their passion, integrity, and intelligence into completing projects that have a lasting impact. We persevere until we deliver real, lasting solutions.Rotary unites more than a million people\n\nTogether, we see a world where people unite and take action to create lasting change – across the globe, in our communities, and in ourselves.', '2017-01-25 00:00:00', 33);

-- --------------------------------------------------------

--
-- Table structure for table `images`
--

CREATE TABLE `images` (
  `id` int(11) NOT NULL,
  `path` text CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `images`
--

INSERT INTO `images` (`id`, `path`) VALUES
(1, '../img/club-paper-img/1.jpg'),
(2, '75481703_419425348948612_7505295649991032832_n.jpg'),
(3, '75481703_419425348948612_7505295649991032832_n.jpg'),
(4, 'Artistic-Landscape-4K-Wallpaper-3840x2160.jpg'),
(5, 'Artistic-Landscape-4K-Wallpaper-3840x2160.jpg'),
(6, 'Artistic-Landscape-4K-Wallpaper-3840x2160.jpg'),
(7, 'Artistic-Landscape-4K-Wallpaper-3840x2160.jpg'),
(8, 'Artistic-Landscape-4K-Wallpaper-3840x2160.jpg'),
(9, '75481703_419425348948612_7505295649991032832_n.jpg'),
(10, 'Artistic-Landscape-4K-Wallpaper-3840x2160.jpg'),
(11, '75481703_419425348948612_7505295649991032832_n.jpg'),
(12, 'Artistic-Landscape-4K-Wallpaper-3840x2160.jpg'),
(13, 'Artistic-Landscape-4K-Wallpaper-3840x2160.jpg'),
(14, 'Artistic-Landscape-4K-Wallpaper-3840x2160.jpg'),
(15, 'Artistic-Landscape-4K-Wallpaper-3840x2160.jpg'),
(16, 'Artistic-Landscape-4K-Wallpaper-3840x2160.jpg'),
(17, '74676986_505402123647571_7705564163912761344_n.jpg'),
(18, '75231876_2199940070306749_8615386765764591616_n.jpg'),
(19, 'Artistic-Landscape-4K-Wallpaper-3840x2160.jpg'),
(20, 'img\\club-info-img\\75481703_419425348948612_7505295649991032832_n.jpg'),
(21, 'img\\club-info-img\\Artistic-Landscape-4K-Wallpaper-3840x2160.jpg'),
(22, 'img\\club-info-img\\75231876_2199940070306749_8615386765764591616_n.jpg'),
(23, 'img\\club-info-img\\Artistic-Landscape-4K-Wallpaper-3840x2160.jpg'),
(24, 'img\\club-info-img\\8150b998d23493f0f9b131a41ccf2549.jpg'),
(25, 'img\\club-info-img\\Artistic-Landscape-4K-Wallpaper-3840x2160.jpg'),
(26, 'img\\club-info-img\\Artistic-Landscape-4K-Wallpaper-3840x2160.jpg'),
(27, 'img\\club-info-img\\75481703_419425348948612_7505295649991032832_n.jpg'),
(28, 'img\\club-info-img\\Artistic-Landscape-4K-Wallpaper-3840x2160.jpg'),
(29, 'img\\club-info-img\\75481703_419425348948612_7505295649991032832_n.jpg'),
(30, 'img\\club-info-img\\Artistic-Landscape-4K-Wallpaper-3840x2160.jpg'),
(31, 'img\\club-info-img\\75481703_419425348948612_7505295649991032832_n.jpg'),
(32, 'img\\club-info-img\\Artistic-Landscape-4K-Wallpaper-3840x2160.jpg'),
(33, 'img\\club-info-img\\75481703_419425348948612_7505295649991032832_n.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `members`
--

CREATE TABLE `members` (
  `id` int(11) NOT NULL,
  `club_id` int(11) DEFAULT NULL,
  `member_id` varchar(250) DEFAULT NULL,
  `first_name` varchar(250) DEFAULT NULL,
  `last_name` varchar(250) DEFAULT NULL,
  `register_num` varchar(45) DEFAULT NULL,
  `member_type` varchar(250) DEFAULT NULL,
  `joined_date` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `members`
--

INSERT INTO `members` (`id`, `club_id`, `member_id`, `first_name`, `last_name`, `register_num`, `member_type`, `joined_date`) VALUES
(34, 1, 'Pending', 'Anudai', 'Amgalan', 'UKh89102032', 'Immediate Past President', '2017-07-01 00:00:00'),
(35, 1, 'Pending', 'Solongo', 'Bayarkhuu', 'UK96082261', 'President', '2017-07-01 00:00:00'),
(36, 1, 'Pending', 'Solongo', 'Baatar', 'UP96062228', 'Vice president', '2017-07-01 00:00:00'),
(37, 1, 'Pending', 'Amirlan', 'Byambadash', 'UK99080141', 'Secretary', '2017-07-01 00:00:00'),
(38, 1, 'Pending', 'Khandsuren', 'Baasansharav', 'UZ95051500', 'Treasurer', '2017-07-01 00:00:00'),
(39, 1, 'Pending', 'Michidmaa', 'Chingis', 'TA96091807', 'Sergeant at Arms', '2017-07-01 00:00:00'),
(40, 1, 'Pending', 'Ganbayar', 'Bayarsaikhan', 'UZ97030333', 'Board member', '2017-07-01 00:00:00'),
(41, 1, 'Pending', 'Od-Amgalan', 'Odkhuu', 'USh97010401', 'Board member', '2017-07-01 00:00:00'),
(42, 1, 'Pending', 'Tod-Erdene', 'Ganbold', 'USh96120912', 'Board member', '2017-07-01 00:00:00'),
(43, 1, 'Pending', 'Enkhdulguun', 'Amgalan', 'UKh96040715', 'Board member', '2018-07-01 00:00:00'),
(44, 1, 'Pending', 'Nyamsuren', 'Batsolongo', 'USh95020631', 'Board member', '2018-07-01 00:00:00'),
(45, 1, 'Pending', 'Enkhjin', 'Mungunshagai', 'UZ97081925', 'Member', '2017-07-01 00:00:00'),
(46, 1, 'Pending', 'Dulguun', 'Tumurkhuyag', 'UP92111753', 'Member', '2017-07-01 00:00:00'),
(47, 1, 'Pending', 'Magsarjav', 'Bolor', 'UK97051077', 'Member', '2018-07-01 00:00:00'),
(48, 1, 'Pending', 'Bat-Amgalan', 'Enkhbold', 'UK94111915', 'Member', '2017-07-01 00:00:00'),
(49, 1, 'Pending', 'Manduul', 'Enkhee', 'UI95042534', 'Member', '2017-07-01 00:00:00'),
(50, 1, 'Pending', 'Zaya', 'Bat-Erdene', 'UZ94032221', 'Member', '2017-07-01 00:00:00'),
(51, 1, 'Pending', 'Zolbayar', 'Ganbaatar', 'IYu93071212', 'Member', '2018-07-01 00:00:00'),
(52, 1, 'Pending', 'Munkhtushig', 'Buyantogtokh', 'DYu01211816', 'Member', '2017-07-01 00:00:00'),
(53, 1, 'Pending', 'Uuganbileg', 'Bayardorj', 'ZYu98080103', 'Member', '2018-07-01 00:00:00'),
(54, 1, 'Pending', 'Battuvshin', 'Erdenesuvd', 'UP97041597', 'Member', '2018-07-01 00:00:00'),
(55, 1, 'Pending', 'Namuundari', 'Khasbaatar', 'USh96092801', 'Member', '2017-07-01 00:00:00'),
(56, 1, 'Pending', 'Duurenbileg', 'Bold-Erdene', 'DJ95121914', 'Member', '2018-07-01 00:00:00'),
(57, 1, 'Pending', 'Achitmaa', 'Bayarlkhagva', 'USh97071523', 'Supporting member', '2019-07-01 00:00:00'),
(58, 1, 'Pending', 'Zolzaya', 'Munkhkhand', 'UK00311921', 'Supporting member', '2019-07-01 00:00:00'),
(59, 1, 'Pending', 'Oyundelger', 'Batsaikhan', 'JYu97100720', 'Supporting member', '2019-07-01 00:00:00'),
(60, 1, 'Pending', 'Ankhbold', 'Dugersuren', 'IE99043015', 'Supporting member', '2019-07-01 00:00:00'),
(61, 1, 'Pending', 'Ganzorig', 'Bayaraa', 'UU91012835', 'Supporting member', '2019-07-01 00:00:00'),
(62, 1, 'Pending', 'Khongorzul', 'Batbaatar', 'USh96010104', 'Supporting member', '2019-07-01 00:00:00'),
(63, 1, 'Pending', 'Bat-Erdem', 'Enkhtuvshin', 'IE96052816', 'Supporting member', '2019-07-01 00:00:00'),
(64, 1, 'Pending', 'Uuganbayar', 'Tsetsenbileg', 'CE96091216', 'Supporting member', '2019-07-01 00:00:00'),
(65, 1, 'Pending', 'Sodkhuu', 'Erdenebileg', 'YeL00242019', 'Supporting member', '2019-07-01 00:00:00'),
(66, 1, 'Pending', 'Bat-Erdene', 'Enkhbold', 'Ush00281034', 'Supporting member', '2019-07-01 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `projects`
--

CREATE TABLE `projects` (
  `id` int(11) NOT NULL,
  `club_id` int(11) NOT NULL,
  `name` text CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `co_organizers` text CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `project_type` varchar(250) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `total_budget` text CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `fundraising` text CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `num_participants` int(11) NOT NULL DEFAULT 0,
  `other_participants` text CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `beneficaries` text CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `sponsors` text CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `started_date` date NOT NULL,
  `finished_date` date NOT NULL,
  `overview` text CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `aim` text CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `projects`
--

INSERT INTO `projects` (`id`, `club_id`, `name`, `co_organizers`, `project_type`, `total_budget`, `fundraising`, `num_participants`, `other_participants`, `beneficaries`, `sponsors`, `started_date`, `finished_date`, `overview`, `aim`) VALUES
(1, 1, '\"Healthy Lifestyle\" project', 'MNUMS, OSCE club', 'Health, Education', '40000MNT', '40000MNT', 6, 'Rotary club of Ulaanbaatar, test 2,test3', 'Low income families and people with disabilites', '', '2019-02-23', '2019-02-23', 'Preventive medical examination, consult and healthy lifestyle training', 'Healthy lifestyle'),
(2, 1, '\"Healthy Lifestyle\" project', 'MNUMS, OSCE club', 'Health, Education', '40000MNT', '40000MNT', 6, 'Rotary club of Ulaanbaatar', 'Low income families and people with disabilites', '', '2019-02-23', '2019-02-23', 'Preventive medical examination, consult and healthy lifestyle training', 'Healthy lifestyle'),
(3, 1, '\"Healthy Lifestyle\" project', 'MNUMS, OSCE club', 'Health, Education', '40000MNT', '40000MNT', 6, 'Rotary club of Ulaanbaatar', 'Low income families and people with disabilites', '', '2019-02-23', '2019-02-23', 'Preventive medical examination, consult and healthy lifestyle training', 'Healthy lifestyle'),
(4, 1, '\"Healthy Lifestyle\" project', 'MNUMS, OSCE club', 'Health, Education', '40000MNT', '40000MNT', 6, 'Rotary club of Ulaanbaatar', 'Low income families and people with disabilites', '', '2019-02-23', '2019-02-23', 'Preventive medical examination, consult and healthy lifestyle training', 'Healthy lifestyle'),
(5, 1, '\"Healthy Lifestyle\" project', 'MNUMS, OSCE club', 'Health, Education', '40000MNT', '40000MNT', 6, 'Rotary club of Ulaanbaatar', 'Low income families and people with disabilites', '', '2019-02-23', '2019-02-23', 'Preventive medical examination, consult and healthy lifestyle training', 'Healthy lifestyle'),
(6, 1, '\"Healthy Lifestyle\" project', 'MNUMS, OSCE club', 'Health, Education', '40000MNT', '40000MNT', 6, 'Rotary club of Ulaanbaatar', 'Low income families and people with disabilites', '', '2019-02-23', '2019-02-23', 'Preventive medical examination, consult and healthy lifestyle training', 'Healthy lifestyle'),
(7, 1, '\"Healthy Lifestyle\" project', 'MNUMS, OSCE club', 'Health, Education', '40000MNT', '40000MNT', 6, 'Rotary club of Ulaanbaatar', 'Low income families and people with disabilites', '', '2019-02-23', '2019-02-23', 'Preventive medical examination, consult and healthy lifestyle training', 'Healthy lifestyle'),
(8, 1, 'New year Parade', 'Rotaract Club of UFE', '', '90000MNT', '', 16, 'Rotaract club of UFE', '', '', '2018-12-27', '2018-12-27', 'Dressed up as Santa Claus, the march started from Shangri-La center to Seoul street. Spread joy, mask and candies on the way to children.', 'Spread joy and happiness'),
(9, 1, 'New year Parade', 'Rotaract Club of UFE', '', '90000MNT', '', 16, 'Rotaract club of UFE', '', '', '2018-12-27', '2018-12-27', 'Dressed up as Santa Claus, the march started from Shangri-La center to Seoul street. Spread joy, mask and candies on the way to children.', 'Spread joy and happiness'),
(10, 1, 'New year Parade', 'Rotaract Club of UFE', '', '90000MNT', '', 16, 'Rotaract club of UFE', '', '', '2018-12-27', '2018-12-27', 'Dressed up as Santa Claus, the march started from Shangri-La center to Seoul street. Spread joy, mask and candies on the way to children.', 'Spread joy and happiness'),
(11, 1, '\"Healthy Lifestyle\" project', 'MNUMS, OSCE club', 'Health, Education', '40000MNT', '40000MNT', 6, 'Rotary club of Ulaanbaatar', 'Low income families and people with disabilites', '', '2019-02-23', '2019-02-23', 'Preventive medical examination, consult and healthy lifestyle training', 'Healthy lifestyle'),
(12, 1, '\"Healthy Lifestyle\" project', 'MNUMS, OSCE club', 'Health, Education', '40000MNT', '40000MNT', 6, 'Rotary club of Ulaanbaatar', 'Low income families and people with disabilites', '', '2019-02-23', '2019-02-23', 'Preventive medical examination, consult and healthy lifestyle training', 'Healthy lifestyle'),
(13, 1, '\"Healthy Lifestyle\" project', 'MNUMS, OSCE club', 'Health, Education', '40000MNT', '40000MNT', 6, 'Rotary club of Ulaanbaatar', 'Low income families and people with disabilites', '', '2019-02-23', '2019-02-23', 'Preventive medical examination, consult and healthy lifestyle training', 'Healthy lifestyle'),
(14, 1, '\"Healthy Lifestyle\" project', 'MNUMS, OSCE club', 'Health, Education', '40000MNT', '40000MNT', 6, 'Rotary club of Ulaanbaatar', 'Low income families and people with disabilites', '', '2019-02-23', '2019-02-23', 'Preventive medical examination, consult and healthy lifestyle training', 'Healthy lifestyle'),
(15, 1, '\"Healthy Lifestyle\" project', 'MNUMS, OSCE club', 'Health, Education', '40000MNT', '40000MNT', 6, 'Rotary club of Ulaanbaatar', 'Low income families and people with disabilites', '', '2019-02-23', '2019-02-23', 'Preventive medical examination, consult and healthy lifestyle training', 'Healthy lifestyle'),
(16, 1, '\"Healthy Lifestyle\" project', 'MNUMS, OSCE club', 'Health, Education', '40000MNT', '40000MNT', 6, 'Rotary club of Ulaanbaatar', 'Low income families and people with disabilites', '', '2019-02-23', '2019-02-23', 'Preventive medical examination, consult and healthy lifestyle training', 'Healthy lifestyle'),
(17, 1, '\"Healthy Lifestyle\" project', 'MNUMS, OSCE club', 'Health, Education', '40000MNT', '40000MNT', 6, 'Rotary club of Ulaanbaatar', 'Low income families and people with disabilites', '', '2019-02-23', '2019-02-23', 'Preventive medical examination, consult and healthy lifestyle training', 'Healthy lifestyle'),
(18, 1, 'New year Parade', 'Rotaract Club of UFE', '', '90000MNT', '', 16, 'Rotaract club of UFE', '', '', '2018-12-27', '2018-12-27', 'Dressed up as Santa Claus, the march started from Shangri-La center to Seoul street. Spread joy, mask and candies on the way to children.', 'Spread joy and happiness'),
(19, 1, 'New year Parade', 'Rotaract Club of UFE', '', '90000MNT', '', 16, 'Rotaract club of UFE', '', '', '2018-12-27', '2018-12-27', 'Dressed up as Santa Claus, the march started from Shangri-La center to Seoul street. Spread joy, mask and candies on the way to children.', 'Spread joy and happiness'),
(20, 1, 'New year Parade', 'Rotaract Club of UFE', '', '90000MNT', '', 16, 'Rotaract club of UFE', '', '', '2018-12-27', '2018-12-27', 'Dressed up as Santa Claus, the march started from Shangri-La center to Seoul street. Spread joy, mask and candies on the way to children.', 'Spread joy and happiness'),
(21, 5, '\"Healthy Lifestyle\" project', 'MNUMS, OSCE club', 'Health, Education', '40000MNT', '40000MNT', 6, 'Rotary club of Ulaanbaatar', 'Low income families and people with disabilites', '', '2019-02-23', '2019-02-23', 'Preventive medical examination, consult and healthy lifestyle training', 'Healthy lifestyle'),
(22, 5, '\"Healthy Lifestyle\" project', 'MNUMS, OSCE club', 'Health, Education', '40000MNT', '40000MNT', 6, 'Rotary club of Ulaanbaatar', 'Low income families and people with disabilites', '', '2019-02-23', '2019-02-23', 'Preventive medical examination, consult and healthy lifestyle training', 'Healthy lifestyle'),
(23, 5, '\"Healthy Lifestyle\" project', 'MNUMS, OSCE club', 'Health, Education', '40000MNT', '40000MNT', 6, 'Rotary club of Ulaanbaatar', 'Low income families and people with disabilites', '', '2019-02-23', '2019-02-23', 'Preventive medical examination, consult and healthy lifestyle training', 'Healthy lifestyle'),
(24, 5, '\"Healthy Lifestyle\" project', 'MNUMS, OSCE club', 'Health, Education', '40000MNT', '40000MNT', 6, 'Rotary club of Ulaanbaatar', 'Low income families and people with disabilites', '', '2019-02-23', '2019-02-23', 'Preventive medical examination, consult and healthy lifestyle training', 'Healthy lifestyle'),
(25, 5, '\"Healthy Lifestyle\" project', 'MNUMS, OSCE club', 'Health, Education', '40000MNT', '40000MNT', 6, 'Rotary club of Ulaanbaatar', 'Low income families and people with disabilites', '', '2019-02-23', '2019-02-23', 'Preventive medical examination, consult and healthy lifestyle training', 'Healthy lifestyle'),
(26, 5, '\"Healthy Lifestyle\" project', 'MNUMS, OSCE club', 'Health, Education', '40000MNT', '40000MNT', 6, 'Rotary club of Ulaanbaatar', 'Low income families and people with disabilites', '', '2019-02-23', '2019-02-23', 'Preventive medical examination, consult and healthy lifestyle training', 'Healthy lifestyle'),
(27, 5, '\"Healthy Lifestyle\" project', 'MNUMS, OSCE club', 'Health, Education', '40000MNT', '40000MNT', 6, 'Rotary club of Ulaanbaatar', 'Low income families and people with disabilites', '', '2019-02-23', '2019-02-23', 'Preventive medical examination, consult and healthy lifestyle training', 'Healthy lifestyle'),
(28, 5, 'New year Parade', 'Rotaract Club of UFE', '', '90000MNT', '', 16, 'Rotaract club of UFE', '', '', '2018-12-27', '2018-12-27', 'Dressed up as Santa Claus, the march started from Shangri-La center to Seoul street. Spread joy, mask and candies on the way to children.', 'Spread joy and happiness'),
(29, 5, 'New year Parade', 'Rotaract Club of UFE', '', '90000MNT', '', 16, 'Rotaract club of UFE', '', '', '2018-12-27', '2018-12-27', 'Dressed up as Santa Claus, the march started from Shangri-La center to Seoul street. Spread joy, mask and candies on the way to children.', 'Spread joy and happiness'),
(30, 5, 'New year Parade', 'Rotaract Club of UFE', '', '90000MNT', '', 16, 'Rotaract club of UFE', '', '', '2018-12-27', '2018-12-27', 'Dressed up as Santa Claus, the march started from Shangri-La center to Seoul street. Spread joy, mask and candies on the way to children.', 'Spread joy and happiness');

-- --------------------------------------------------------

--
-- Table structure for table `project_images`
--

CREATE TABLE `project_images` (
  `id` int(11) NOT NULL,
  `project_id` int(11) NOT NULL,
  `image_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(500) DEFAULT NULL,
  `password` varchar(1000) DEFAULT NULL,
  `club_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `password`, `club_id`) VALUES
(6, 'Manduul', '$2b$10$i7B.oHZMYmB2Fr8SLYpqi.g1tLaqfX5XATL84702D1OU5gC.7pY9.', 5);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `club`
--
ALTER TABLE `club`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `images`
--
ALTER TABLE `images`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `members`
--
ALTER TABLE `members`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `projects`
--
ALTER TABLE `projects`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `project_images`
--
ALTER TABLE `project_images`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `club_id_UNIQUE` (`club_id`),
  ADD UNIQUE KEY `username_UNIQUE` (`username`),
  ADD UNIQUE KEY `password_UNIQUE` (`password`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `club`
--
ALTER TABLE `club`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `images`
--
ALTER TABLE `images`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=34;

--
-- AUTO_INCREMENT for table `members`
--
ALTER TABLE `members`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=67;

--
-- AUTO_INCREMENT for table `projects`
--
ALTER TABLE `projects`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- AUTO_INCREMENT for table `project_images`
--
ALTER TABLE `project_images`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
