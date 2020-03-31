-- phpMyAdmin SQL Dump
-- version 5.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 31, 2020 at 03:04 AM
-- Server version: 10.4.11-MariaDB
-- PHP Version: 7.2.27

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
(6, 'Tsast', 'Tsast Rotaract Club is one of the youngest Rotaract Club in Mongolia which established in 2017. We are currently operating with 34 members, 9 projects, 2 ongoing projects under support of Rotary club UB Central.', '2017-01-15 18:00:00', 127),
(7, 'Ulaanbaatar', 'Tsast Rotaract Club is one of the youngest Rotaract Club in Mongolia which established in 2017. We are currently operating with 34 members, 9 projects, 2 ongoing projects under support of Rotary club UB Central.', '2017-01-18 00:00:00', 124);

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
(33, 'img\\club-info-img\\75481703_419425348948612_7505295649991032832_n.jpg'),
(34, 'img\\club-info-img\\75231876_2199940070306749_8615386765764591616_n.jpg'),
(35, 'img\\club-info-img\\75481703_419425348948612_7505295649991032832_n.jpg'),
(36, 'img\\club-info-img\\75485167_269244627325994_5118080460970262528_n.jpg'),
(37, 'img\\club-info-img\\74410205_776969836074027_6613501499781677056_n.jpg'),
(38, 'img\\club-info-img\\74676986_505402123647571_7705564163912761344_n.jpg'),
(39, 'img\\club-info-img\\75231876_2199940070306749_8615386765764591616_n.jpg'),
(40, 'img\\club-info-img\\75481703_419425348948612_7505295649991032832_n.jpg'),
(41, 'img\\club-info-img\\Artistic-Landscape-4K-Wallpaper-3840x2160.jpg'),
(42, 'img\\club-info-img\\75481703_419425348948612_7505295649991032832_n.jpg'),
(43, 'img\\club-info-img\\80975684_910937979301621_3273506601360687104_n.jpg'),
(44, 'img\\club-info-img\\Artistic-Landscape-4K-Wallpaper-3840x2160 - Copy - Copy.jpg'),
(45, 'img\\club-info-img\\75481703_419425348948612_7505295649991032832_n.jpg'),
(46, 'img\\club-info-img\\80975684_910937979301621_3273506601360687104_n.jpg'),
(47, 'img\\club-info-img\\Artistic-Landscape-4K-Wallpaper-3840x2160 - Copy - Copy.jpg'),
(48, 'img\\club-info-img\\74410205_776969836074027_6613501499781677056_n.jpg'),
(49, 'img\\club-info-img\\74676986_505402123647571_7705564163912761344_n.jpg'),
(50, 'img\\club-info-img\\Artistic-Landscape-4K-Wallpaper-3840x2160 - Copy - Copy.jpg'),
(51, 'img\\club-info-img\\75231876_2199940070306749_8615386765764591616_n.jpg'),
(52, 'img\\club-info-img\\75481703_419425348948612_7505295649991032832_n.jpg'),
(53, 'img\\club-info-img\\Artistic-Landscape-4K-Wallpaper-3840x2160 - Copy - Copy.jpg'),
(54, 'img\\club-info-img\\75231876_2199940070306749_8615386765764591616_n.jpg'),
(55, 'img\\club-info-img\\75481703_419425348948612_7505295649991032832_n.jpg'),
(56, 'img\\club-info-img\\Artistic-Landscape-4K-Wallpaper-3840x2160 - Copy - Copy.jpg'),
(57, 'img\\club-info-img\\Artistic-Landscape-4K-Wallpaper-3840x2160 - Copy - Copy.jpg'),
(58, 'img\\club-info-img\\75481703_419425348948612_7505295649991032832_n.jpg'),
(59, 'img\\club-info-img\\75231876_2199940070306749_8615386765764591616_n.jpg'),
(60, 'img\\club-info-img\\75481703_419425348948612_7505295649991032832_n.jpg'),
(61, 'img\\club-info-img\\Artistic-Landscape-4K-Wallpaper-3840x2160 - Copy - Copy.jpg'),
(62, 'img\\club-info-img\\75231876_2199940070306749_8615386765764591616_n.jpg'),
(63, 'img\\club-info-img\\75481703_419425348948612_7505295649991032832_n.jpg'),
(64, 'img\\club-info-img\\Artistic-Landscape-4K-Wallpaper-3840x2160 - Copy - Copy.jpg'),
(65, 'img\\club-info-img\\75231876_2199940070306749_8615386765764591616_n.jpg'),
(66, 'img\\club-info-img\\75481703_419425348948612_7505295649991032832_n.jpg'),
(67, 'img\\club-info-img\\75231876_2199940070306749_8615386765764591616_n.jpg'),
(68, 'img\\club-info-img\\Artistic-Landscape-4K-Wallpaper-3840x2160 - Copy - Copy.jpg'),
(69, 'img\\club-info-img\\75231876_2199940070306749_8615386765764591616_n.jpg'),
(70, 'img\\club-info-img\\Artistic-Landscape-4K-Wallpaper-3840x2160 - Copy - Copy.jpg'),
(71, 'img\\club-info-img\\75481703_419425348948612_7505295649991032832_n.jpg'),
(72, 'img\\club-info-img\\Artistic-Landscape-4K-Wallpaper-3840x2160 - Copy - Copy.jpg'),
(73, 'img\\club-info-img\\75231876_2199940070306749_8615386765764591616_n.jpg'),
(74, 'img\\club-info-img\\75481703_419425348948612_7505295649991032832_n.jpg'),
(75, 'img\\club-info-img\\75485167_269244627325994_5118080460970262528_n.jpg'),
(76, 'img\\club-info-img\\Artistic-Landscape-4K-Wallpaper-3840x2160 - Copy - Copy.jpg'),
(77, 'img\\club-info-img\\75231876_2199940070306749_8615386765764591616_n.jpg'),
(78, 'img\\club-info-img\\75481703_419425348948612_7505295649991032832_n.jpg'),
(79, 'img\\club-info-img\\75485167_269244627325994_5118080460970262528_n.jpg'),
(80, 'img\\club-info-img\\74410205_776969836074027_6613501499781677056_n.jpg'),
(81, 'img\\club-info-img\\76653005_501266747132397_3801956615796555776_n.jpg'),
(82, 'img\\club-info-img\\Artistic-Landscape-4K-Wallpaper-3840x2160 - Copy - Copy.jpg'),
(83, 'img\\club-info-img\\Artistic-Landscape-4K-Wallpaper-3840x2160 - Copy - Copy.jpg'),
(84, 'img\\club-info-img\\75481703_419425348948612_7505295649991032832_n.jpg'),
(85, 'img/club-info-img/78f7dcd5cb6862404494d80f7d7c89cc.jpg'),
(86, 'img/club-info-img/86ff3910f220a55abfa0500f01d944bf.jpg'),
(87, 'img/club-info-img/ea6ee281a3a677ad1ebcf6e8a1125481.jpg'),
(88, 'img/club-info-img/fcc32e30a70c41dbf2baf0ec17fcd4ce.jpg'),
(89, 'img/club-info-img/593782e471f6c32868ebf249b8673bb3.png'),
(90, 'img/club-info-img/593782e471f6c32868ebf249b8673bb3.png'),
(91, 'img/club-info-img/86ff3910f220a55abfa0500f01d944bf.jpg'),
(92, 'img/club-info-img/ea6ee281a3a677ad1ebcf6e8a1125481.jpg'),
(93, 'img/club-info-img/fcc32e30a70c41dbf2baf0ec17fcd4ce.jpg'),
(94, 'img/club-info-img/593782e471f6c32868ebf249b8673bb3.png'),
(95, 'img/club-info-img/86ff3910f220a55abfa0500f01d944bf.jpg'),
(96, 'img/club-info-img/ea6ee281a3a677ad1ebcf6e8a1125481.jpg'),
(97, 'img/club-info-img/fcc32e30a70c41dbf2baf0ec17fcd4ce.jpg'),
(98, 'img/club-info-img/Artistic-Landscape-4K-Wallpaper-3840x2160 - Copy - Copy.jpg'),
(99, 'img/club-info-img/86ff3910f220a55abfa0500f01d944bf.jpg'),
(100, 'img/club-info-img/ea6ee281a3a677ad1ebcf6e8a1125481.jpg'),
(101, 'img/club-info-img/fcc32e30a70c41dbf2baf0ec17fcd4ce.jpg'),
(102, 'img/club-info-img/86ff3910f220a55abfa0500f01d944bf.jpg'),
(103, 'img/club-info-img/ea6ee281a3a677ad1ebcf6e8a1125481.jpg'),
(104, 'img/club-info-img/fcc32e30a70c41dbf2baf0ec17fcd4ce.jpg'),
(105, 'img\\club-info-img\\kokushibou-4k-demon-hunter-antagonist-kimetsu-no-yaiba.jpg'),
(106, 'img\\club-info-img\\kokushibou-4k-demon-hunter-antagonist-kimetsu-no-yaiba.jpg'),
(107, 'img\\club-info-img\\kokushibou-4k-demon-hunter-antagonist-kimetsu-no-yaiba.jpg'),
(108, 'img\\club-info-img\\photo-1519501025264-65ba15a82390.jpg'),
(109, 'img\\club-member-img\\kokushibou-4k-demon-hunter-antagonist-kimetsu-no-yaiba.jpg'),
(110, 'img\\club-member-img\\kokushibou-4k-demon-hunter-antagonist-kimetsu-no-yaiba.jpg'),
(111, 'img\\club-member-img\\photo-1519501025264-65ba15a82390.jpg'),
(112, 'img\\club-member-img\\kokushibou-4k-demon-hunter-antagonist-kimetsu-no-yaiba.jpg'),
(113, 'img\\club-member-img\\photo-1519501025264-65ba15a82390.jpg'),
(114, 'img\\club-member-img\\kokushibou-4k-demon-hunter-antagonist-kimetsu-no-yaiba.jpg'),
(115, 'img\\club-member-img\\kokushibou-4k-demon-hunter-antagonist-kimetsu-no-yaiba.jpg'),
(116, 'img\\club-member-img\\kokushibou-4k-demon-hunter-antagonist-kimetsu-no-yaiba.jpg'),
(117, 'img\\club-member-img\\photo-1519501025264-65ba15a82390.jpg'),
(118, 'img\\club-member-img\\kokushibou-4k-demon-hunter-antagonist-kimetsu-no-yaiba.jpg'),
(119, 'img\\club-member-img\\kokushibou-4k-demon-hunter-antagonist-kimetsu-no-yaiba.jpg'),
(120, 'img\\club-member-img\\photo-1519501025264-65ba15a82390.jpg'),
(121, 'img\\club-member-img\\photo-1519501025264-65ba15a82390.jpg'),
(122, 'img\\club-info-img\\photo-1519501025264-65ba15a82390.jpg'),
(123, 'img\\club-member-img\\photo-1519501025264-65ba15a82390.jpg'),
(124, 'img\\club-info-img\\photo-1519501025264-65ba15a82390.jpg'),
(125, 'img\\club-member-img\\photo-1519501025264-65ba15a82390.jpg'),
(126, 'img\\club-member-img\\kokushibou-4k-demon-hunter-antagonist-kimetsu-no-yaiba.jpg'),
(127, 'img\\club-info-img\\photo-1519501025264-65ba15a82390.jpg'),
(128, 'img\\club-info-img\\photo-1519501025264-65ba15a82390.jpg'),
(129, 'img\\club-info-img\\icon.png'),
(130, 'img\\club-info-img\\photo-1519501025264-65ba15a82390.jpg'),
(131, 'img\\club-info-img\\kokushibou-4k-demon-hunter-antagonist-kimetsu-no-yaiba.jpg'),
(132, 'img\\club-info-img\\photo-1519501025264-65ba15a82390.jpg'),
(133, 'img\\club-info-img\\kokushibou-4k-demon-hunter-antagonist-kimetsu-no-yaiba.jpg');

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
  `joined_date` datetime DEFAULT NULL,
  `image_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `members`
--

INSERT INTO `members` (`id`, `club_id`, `member_id`, `first_name`, `last_name`, `register_num`, `member_type`, `joined_date`, `image_id`) VALUES
(67, 6, 'Pending', 'Anudai', 'Amgalan', 'UKh89102032', 'Immediate Past President', '2017-07-01 00:00:00', 116),
(68, 6, 'Pending', 'Solongo', 'Bayarkhuu', 'UK96082261', 'President', '2017-07-01 00:00:00', 123),
(69, 6, 'Pending', 'Solongo', 'Baatar', 'UP96062228', 'Vice president', '2017-07-01 00:00:00', 0),
(70, 6, 'Pending', 'Amirlan', 'Byambadash', 'UK99080141', 'Secretary', '2017-07-01 00:00:00', 0),
(71, 6, 'Pending', 'Khandsuren', 'Baasansharav', 'UZ95051500', 'Treasurer', '2017-07-01 00:00:00', 117),
(72, 6, 'Pending', 'Michidmaa', 'Chingis', 'TA96091807', 'Sergeant at Arms', '2017-07-01 00:00:00', 0),
(73, 6, 'Pending', 'Ganbayar', 'Bayarsaikhan', 'UZ97030333', 'Board member', '2017-07-01 00:00:00', 0),
(74, 6, 'Pending', 'Od-Amgalan', 'Odkhuu', 'USh97010401', 'Board member', '2017-07-01 00:00:00', 0),
(75, 6, 'Pending', 'Tod-Erdene', 'Ganbold', 'USh96120912', 'Board member', '2017-07-01 00:00:00', 0),
(76, 6, 'Pending', 'Enkhdulguun', 'Amgalan', 'UKh96040715', 'Board member', '2018-07-01 00:00:00', 121),
(77, 6, 'Pending', 'Nyamsuren', 'Batsolongo', 'USh95020631', 'Board member', '2018-07-01 00:00:00', 0),
(78, 6, 'Pending', 'Enkhjin', 'Mungunshagai', 'UZ97081925', 'Member', '2017-07-01 00:00:00', 0),
(79, 6, 'Pending', 'Dulguun', 'Tumurkhuyag', 'UP92111753', 'Member', '2017-07-01 00:00:00', 0),
(80, 6, 'Pending', 'Magsarjav test', 'Bolor', 'UK97051077', 'Member', '2018-07-01 00:00:00', 118),
(81, 6, 'Pending', 'Bat-Amgalan', 'Enkhbold', 'UK94111915', 'Member', '2017-07-01 00:00:00', 0),
(82, 6, 'Pending', 'Manduul', 'Enkhee', 'UI95042534', 'Member', '2017-07-01 00:00:00', 126),
(83, 6, 'Pending', 'Zaya', 'Bat-Erdene', 'UZ94032221', 'Member', '2017-07-01 00:00:00', 0),
(84, 6, 'Pending', 'Zolbayar', 'Ganbaatar', 'IYu93071212', 'Member', '2018-07-01 00:00:00', 0),
(85, 6, 'Pending', 'Munkhtushig', 'Buyantogtokh', 'DYu01211816', 'Member', '2017-07-01 00:00:00', 0),
(86, 6, 'Pending', 'Uuganbileg', 'Bayardorj', 'ZYu98080103', 'Member', '2018-07-01 00:00:00', 0),
(87, 6, 'Pending', 'Battuvshin', 'Erdenesuvd', 'UP97041597', 'Member', '2018-07-01 00:00:00', 0),
(88, 6, 'Pending', 'Namuundari', 'Khasbaatar', 'USh96092801', 'Member', '2017-07-01 00:00:00', 0),
(89, 6, 'Pending', 'Duurenbileg', 'Bold-Erdene', 'DJ95121914', 'Member', '2018-07-01 00:00:00', 0),
(90, 6, 'Pending', 'Achitmaa', 'Bayarlkhagva', 'USh97071523', 'Supporting member', '2019-07-01 00:00:00', 0),
(91, 6, 'Pending', 'Zolzaya', 'Munkhkhand', 'UK00311921', 'Supporting member', '2019-07-01 00:00:00', 0),
(92, 6, 'Pending', 'Oyundelger', 'Batsaikhan', 'JYu97100720', 'Supporting member', '2019-07-01 00:00:00', 0),
(93, 6, 'Pending', 'Ankhbold', 'Dugersuren', 'IE99043015', 'Supporting member', '2019-07-01 00:00:00', 119),
(94, 6, 'Pending', 'Ganzorig', 'Bayaraa', 'UU91012835', 'Supporting member', '2019-07-01 00:00:00', 0),
(95, 6, 'Pending', 'Khongorzul', 'Batbaatar', 'USh96010104', 'Supporting member', '2019-07-01 00:00:00', 0),
(96, 6, 'Pending', 'Bat-Erdem', 'Enkhtuvshin', 'IE96052816', 'Supporting member', '2019-07-01 00:00:00', 0),
(97, 6, 'Pending', 'Uuganbayar', 'Tsetsenbileg', 'CE96091216', 'Supporting member', '2019-07-01 00:00:00', 120),
(98, 6, 'Pending', 'Sodkhuu', 'Erdenebileg', 'YeL00242019', 'Supporting member', '2019-07-01 00:00:00', 0),
(99, 6, 'Pending', 'Bat-Erdene', 'Enkhbold', 'Ush00281034', 'Supporting member', '2019-07-01 00:00:00', 0),
(100, 7, 'Pending', 'Test', 'Test', 'Test', NULL, '2020-02-20 00:00:00', 125),
(101, 6, 'Pending', 'Anudai', 'Amgalan', 'UKh89102032', 'Immediate Past President', '2017-07-01 00:00:00', 0),
(102, 6, 'Pending', 'Solongo', 'Bayarkhuu', 'UK96082261', 'President', '2017-07-01 00:00:00', 0),
(103, 6, 'Pending', 'Solongo', 'Baatar', 'UP96062228', 'Vice president', '2017-07-01 00:00:00', 0),
(104, 6, 'Pending', 'Amirlan', 'Byambadash', 'UK99080141', 'Secretary', '2017-07-01 00:00:00', 0),
(105, 6, 'Pending', 'Khandsuren', 'Baasansharav', 'UZ95051500', 'Treasurer', '2017-07-01 00:00:00', 0),
(106, 6, 'Pending', 'Michidmaa', 'Chingis', 'TA96091807', 'Sergeant at Arms', '2017-07-01 00:00:00', 0),
(107, 6, 'Pending', 'Ganbayar', 'Bayarsaikhan', 'UZ97030333', 'Board member', '2017-07-01 00:00:00', 0),
(108, 6, 'Pending', 'Od-Amgalan', 'Odkhuu', 'USh97010401', 'Board member', '2017-07-01 00:00:00', 0),
(109, 6, 'Pending', 'Tod-Erdene', 'Ganbold', 'USh96120912', 'Board member', '2017-07-01 00:00:00', 0),
(110, 6, 'Pending', 'Enkhdulguun', 'Amgalan', 'UKh96040715', 'Board member', '2018-07-01 00:00:00', 0),
(111, 6, 'Pending', 'Nyamsuren', 'Batsolongo', 'USh95020631', 'Board member', '2018-07-01 00:00:00', 0),
(112, 6, 'Pending', 'Enkhjin', 'Mungunshagai', 'UZ97081925', 'Member', '2017-07-01 00:00:00', 0),
(113, 6, 'Pending', 'Dulguun', 'Tumurkhuyag', 'UP92111753', 'Member', '2017-07-01 00:00:00', 0),
(114, 6, 'Pending', 'Magsarjav', 'Bolor', 'UK97051077', 'Member', '2018-07-01 00:00:00', 0),
(115, 6, 'Pending', 'Bat-Amgalan', 'Enkhbold', 'UK94111915', 'Member', '2017-07-01 00:00:00', 0),
(116, 6, 'Pending', 'Manduul', 'Enkhee', 'UI95042534', 'Member', '2017-07-01 00:00:00', 0),
(117, 6, 'Pending', 'Zaya', 'Bat-Erdene', 'UZ94032221', 'Member', '2017-07-01 00:00:00', 0),
(118, 6, 'Pending', 'Zolbayar', 'Ganbaatar', 'IYu93071212', 'Member', '2018-07-01 00:00:00', 0),
(119, 6, 'Pending', 'Munkhtushig', 'Buyantogtokh', 'DYu01211816', 'Member', '2017-07-01 00:00:00', 0),
(120, 6, 'Pending', 'Uuganbileg', 'Bayardorj', 'ZYu98080103', 'Member', '2018-07-01 00:00:00', 0),
(121, 6, 'Pending', 'Battuvshin', 'Erdenesuvd', 'UP97041597', 'Member', '2018-07-01 00:00:00', 0),
(122, 6, 'Pending', 'Namuundari', 'Khasbaatar', 'USh96092801', 'Member', '2017-07-01 00:00:00', 0),
(123, 6, 'Pending', 'Duurenbileg', 'Bold-Erdene', 'DJ95121914', 'Member', '2018-07-01 00:00:00', 0),
(124, 6, 'Pending', 'Achitmaa', 'Bayarlkhagva', 'USh97071523', 'Supporting member', '2019-07-01 00:00:00', 0),
(125, 6, 'Pending', 'Zolzaya', 'Munkhkhand', 'UK00311921', 'Supporting member', '2019-07-01 00:00:00', 0),
(126, 6, 'Pending', 'Oyundelger', 'Batsaikhan', 'JYu97100720', 'Supporting member', '2019-07-01 00:00:00', 0),
(127, 6, 'Pending', 'Ankhbold', 'Dugersuren', 'IE99043015', 'Supporting member', '2019-07-01 00:00:00', 0),
(128, 6, 'Pending', 'Ganzorig', 'Bayaraa', 'UU91012835', 'Supporting member', '2019-07-01 00:00:00', 0),
(129, 6, 'Pending', 'Khongorzul', 'Batbaatar', 'USh96010104', 'Supporting member', '2019-07-01 00:00:00', 0),
(130, 6, 'Pending', 'Bat-Erdem', 'Enkhtuvshin', 'IE96052816', 'Supporting member', '2019-07-01 00:00:00', 0),
(131, 6, 'Pending', 'Uuganbayar', 'Tsetsenbileg', 'CE96091216', 'Supporting member', '2019-07-01 00:00:00', 0),
(132, 6, 'Pending', 'Sodkhuu', 'Erdenebileg', 'YeL00242019', 'Supporting member', '2019-07-01 00:00:00', 0),
(133, 6, 'Pending', 'Bat-Erdene', 'Enkhbold', 'Ush00281034', 'Supporting member', '2019-07-01 00:00:00', 0),
(134, 6, 'Pending', 'Anudai', 'Amgalan', 'UKh89102032', 'Immediate Past President', '2017-07-01 00:00:00', 0),
(135, 6, 'Pending', 'Solongo', 'Bayarkhuu', 'UK96082261', 'President', '2017-07-01 00:00:00', 0),
(136, 6, 'Pending', 'Solongo', 'Baatar', 'UP96062228', 'Vice president', '2017-07-01 00:00:00', 0),
(137, 6, 'Pending', 'Amirlan', 'Byambadash', 'UK99080141', 'Secretary', '2017-07-01 00:00:00', 0),
(138, 6, 'Pending', 'Khandsuren', 'Baasansharav', 'UZ95051500', 'Treasurer', '2017-07-01 00:00:00', 0),
(139, 6, 'Pending', 'Michidmaa', 'Chingis', 'TA96091807', 'Sergeant at Arms', '2017-07-01 00:00:00', 0),
(140, 6, 'Pending', 'Ganbayar', 'Bayarsaikhan', 'UZ97030333', 'Board member', '2017-07-01 00:00:00', 0),
(141, 6, 'Pending', 'Od-Amgalan', 'Odkhuu', 'USh97010401', 'Board member', '2017-07-01 00:00:00', 0),
(142, 6, 'Pending', 'Tod-Erdene', 'Ganbold', 'USh96120912', 'Board member', '2017-07-01 00:00:00', 0),
(143, 6, 'Pending', 'Enkhdulguun', 'Amgalan', 'UKh96040715', 'Board member', '2018-07-01 00:00:00', 0),
(144, 6, 'Pending', 'Nyamsuren', 'Batsolongo', 'USh95020631', 'Board member', '2018-07-01 00:00:00', 0),
(145, 6, 'Pending', 'Enkhjin', 'Mungunshagai', 'UZ97081925', 'Member', '2017-07-01 00:00:00', 0),
(146, 6, 'Pending', 'Dulguun', 'Tumurkhuyag', 'UP92111753', 'Member', '2017-07-01 00:00:00', 0),
(147, 6, 'Pending', 'Magsarjav', 'Bolor', 'UK97051077', 'Member', '2018-07-01 00:00:00', 0),
(148, 6, 'Pending', 'Bat-Amgalan', 'Enkhbold', 'UK94111915', 'Member', '2017-07-01 00:00:00', 0),
(149, 6, 'Pending', 'Manduul', 'Enkhee', 'UI95042534', 'Member', '2017-07-01 00:00:00', 0),
(150, 6, 'Pending', 'Zaya', 'Bat-Erdene', 'UZ94032221', 'Member', '2017-07-01 00:00:00', 0),
(151, 6, 'Pending', 'Zolbayar', 'Ganbaatar', 'IYu93071212', 'Member', '2018-07-01 00:00:00', 0),
(152, 6, 'Pending', 'Munkhtushig', 'Buyantogtokh', 'DYu01211816', 'Member', '2017-07-01 00:00:00', 0),
(153, 6, 'Pending', 'Uuganbileg', 'Bayardorj', 'ZYu98080103', 'Member', '2018-07-01 00:00:00', 0),
(154, 6, 'Pending', 'Battuvshin', 'Erdenesuvd', 'UP97041597', 'Member', '2018-07-01 00:00:00', 0),
(155, 6, 'Pending', 'Namuundari', 'Khasbaatar', 'USh96092801', 'Member', '2017-07-01 00:00:00', 0),
(156, 6, 'Pending', 'Duurenbileg', 'Bold-Erdene', 'DJ95121914', 'Member', '2018-07-01 00:00:00', 0),
(157, 6, 'Pending', 'Achitmaa', 'Bayarlkhagva', 'USh97071523', 'Supporting member', '2019-07-01 00:00:00', 0),
(158, 6, 'Pending', 'Zolzaya', 'Munkhkhand', 'UK00311921', 'Supporting member', '2019-07-01 00:00:00', 0),
(159, 6, 'Pending', 'Oyundelger', 'Batsaikhan', 'JYu97100720', 'Supporting member', '2019-07-01 00:00:00', 0),
(160, 6, 'Pending', 'Ankhbold', 'Dugersuren', 'IE99043015', 'Supporting member', '2019-07-01 00:00:00', 0),
(161, 6, 'Pending', 'Ganzorig', 'Bayaraa', 'UU91012835', 'Supporting member', '2019-07-01 00:00:00', 0),
(162, 6, 'Pending', 'Khongorzul', 'Batbaatar', 'USh96010104', 'Supporting member', '2019-07-01 00:00:00', 0),
(163, 6, 'Pending', 'Bat-Erdem', 'Enkhtuvshin', 'IE96052816', 'Supporting member', '2019-07-01 00:00:00', 0),
(164, 6, 'Pending', 'Uuganbayar', 'Tsetsenbileg', 'CE96091216', 'Supporting member', '2019-07-01 00:00:00', 0),
(165, 6, 'Pending', 'Sodkhuu', 'Erdenebileg', 'YeL00242019', 'Supporting member', '2019-07-01 00:00:00', 0),
(166, 6, 'Pending', 'Bat-Erdene', 'Enkhbold', 'Ush00281034', 'Supporting member', '2019-07-01 00:00:00', 0);

-- --------------------------------------------------------

--
-- Table structure for table `member_type`
--

CREATE TABLE `member_type` (
  `id` int(11) NOT NULL,
  `member_type` varchar(100) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `member_type`
--

INSERT INTO `member_type` (`id`, `member_type`) VALUES
(1, 'President'),
(2, 'Vice President'),
(3, 'Secretary'),
(4, 'Treasurer'),
(5, 'Sergeant at Arms'),
(6, 'Board Member'),
(7, 'Member'),
(8, 'Supporting Member'),
(9, 'Immediate Past President');

-- --------------------------------------------------------

--
-- Table structure for table `member_type_link`
--

CREATE TABLE `member_type_link` (
  `member_id` int(11) NOT NULL,
  `member_type_id` int(11) NOT NULL,
  `started_date` date NOT NULL,
  `end_date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `member_type_link`
--

INSERT INTO `member_type_link` (`member_id`, `member_type_id`, `started_date`, `end_date`) VALUES
(67, 1, '2020-02-19', '2020-02-29'),
(67, 9, '2020-02-19', '2020-02-29');

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
(60, 6, 'Ideas For Life', '\"Manai Ger\" Orphanage', 'Education', '99,500MNT', '118,000MNT', 12, '\"Hepatogastroenterologist\" club and \"Гэрэл гаргагчид-Тэвчээргүй залуусын нэгдэл\" NGO', '\"Manai Ger\" Orphanage', '-', '2017-10-20', '2017-12-20', 'Organization of TedxAnagaah event, Cupcake, Training of Handcrafting, sales of handcraft items', 'To develop creative mind, life skills for children and sale their hand made product'),
(61, 6, 'Ideas For Life', '\"Manai Ger\" Orphanage', 'Education', '99,500MNT', '118,000MNT', 12, '\"Hepatogastroenterologist\" club and \"Гэрэл гаргагчид-Тэвчээргүй залуусын нэгдэл\" NGO', '\"Manai Ger\" Orphanage', '-', '2017-10-20', '2017-12-20', 'Organization of TedxAnagaah event, Cupcake, Training of Handcrafting, sales of handcraft items', 'To develop creative mind, life skills for children and sale their hand made product'),
(62, 6, 'Ideas For Life', '\"Manai Ger\" Orphanage', 'Education', '99,500MNT', '118,000MNT', 12, '\"Hepatogastroenterologist\" club and \"Гэрэл гаргагчид-Тэвчээргүй залуусын нэгдэл\" NGO', '\"Manai Ger\" Orphanage', '-', '2017-10-20', '2017-12-20', 'Organization of TedxAnagaah event, Cupcake, Training of Handcrafting, sales of handcraft items', 'To develop creative mind, life skills for children and sale their hand made product');

-- --------------------------------------------------------

--
-- Table structure for table `project_images`
--

CREATE TABLE `project_images` (
  `id` int(11) NOT NULL,
  `project_id` int(11) NOT NULL,
  `image_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `project_images`
--

INSERT INTO `project_images` (`id`, `project_id`, `image_id`) VALUES
(65, 60, 132),
(66, 60, 133);

-- --------------------------------------------------------

--
-- Table structure for table `project_type`
--

CREATE TABLE `project_type` (
  `id` int(11) NOT NULL,
  `type` varchar(256) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `project_type`
--

INSERT INTO `project_type` (`id`, `type`) VALUES
(1, 'Health'),
(2, 'Education');

-- --------------------------------------------------------

--
-- Table structure for table `project_type_link`
--

CREATE TABLE `project_type_link` (
  `id` int(11) NOT NULL,
  `project_id` int(11) NOT NULL,
  `type_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `project_type_link`
--

INSERT INTO `project_type_link` (`id`, `project_id`, `type_id`) VALUES
(46, 60, 2);

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
(6, 'Manduul', '$2b$10$i7B.oHZMYmB2Fr8SLYpqi.g1tLaqfX5XATL84702D1OU5gC.7pY9.', 6),
(7, 'ub', '$2a$10$WbzzMjyMLAKd0ZKlEa12z.FsV/ACxcaVIj3h9dTakWTn.e5GWSSsC', 7);

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
-- Indexes for table `member_type`
--
ALTER TABLE `member_type`
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
-- Indexes for table `project_type`
--
ALTER TABLE `project_type`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `project_type_link`
--
ALTER TABLE `project_type_link`
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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `images`
--
ALTER TABLE `images`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=134;

--
-- AUTO_INCREMENT for table `members`
--
ALTER TABLE `members`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=167;

--
-- AUTO_INCREMENT for table `member_type`
--
ALTER TABLE `member_type`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `projects`
--
ALTER TABLE `projects`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=63;

--
-- AUTO_INCREMENT for table `project_images`
--
ALTER TABLE `project_images`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=67;

--
-- AUTO_INCREMENT for table `project_type`
--
ALTER TABLE `project_type`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `project_type_link`
--
ALTER TABLE `project_type_link`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=47;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
