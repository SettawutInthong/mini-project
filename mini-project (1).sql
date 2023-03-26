-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 26, 2023 at 08:10 PM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `mini-project`
--

-- --------------------------------------------------------

--
-- Table structure for table `order`
--

CREATE TABLE `order` (
  `order_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `price` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `product_id` int(11) NOT NULL,
  `product_name` varchar(64) NOT NULL,
  `product_type_id` varchar(16) NOT NULL,
  `price` int(16) NOT NULL,
  `image_url` varchar(64) NOT NULL,
  `size` int(11) NOT NULL,
  `stock` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_thai_520_w2;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`product_id`, `product_name`, `product_type_id`, `price`, `image_url`, `size`, `stock`) VALUES
(1, 'ต้นช้อนเงินช้อนทอง 10\"', 'A1', 790, '1p.jpg', 10, 0),
(2, 'ต้นมอนสเตอร่า  10\"', 'A2', 450, 'jc.jpg', 10, 0),
(3, 'ต้นปาล์มพัดจีบ 10\"', 'A2', 550, 'vk.jpg', 10, 0),
(4, 'ต้นวาสนา 4\"', 'A1', 390, 'ez.jpg', 4, 0),
(5, 'ต้นยางอินเดีย สีดำ 10\"', 'A2', 490, 'd3.jpg', 10, 0),
(6, 'ต้นลิ้นมังกร 6\"', 'A2', 220, '1z.jpg', 6, 0),
(7, 'ต้นไทรใบสัก 10\"', 'A2', 590, '8o.jpg', 10, 0),
(8, 'ต้นซานาดู 10\"', 'A2', 620, '9r.jpg', 10, 0),
(9, 'ต้นจั๋งจีน 10\"', 'A2', 490, 'jr.jpg', 10, 0),
(10, 'ต้นหมากเหลือง 10\"', 'A3', 390, 'kk.jpg', 10, 0),
(11, 'ต้นจั๋งญี่ปุ่น 10\"', 'A2', 490, 'y1.jpg', 10, 0),
(12, 'ต้นปาล์มไผ่ 12\"', 'A2', 690, '88.jpg', 12, 0),
(13, 'ต้นลิ้นมังกร (Golden Frame) 6\"', 'A1', 540, 'f8.jpg', 6, 0),
(14, 'ต้นลิ้นมังกร (โลตัส) 6\"', 'A1', 320, 'cp.jpg', 6, 0),
(15, 'ต้นซุปเปอร์พิ้งค์ 6\"', 'A1', 350, 'as.jpg', 6, 0),
(16, 'ต้นกวักมรกต 8\"', 'A1', 350, '4c.jpg', 8, 0),
(17, 'ต้นออมชมพู 6\"', 'A3', 550, 'ap.jpg', 6, 0),
(18, 'ต้นซุปเปอร์เรด 6\"', 'A1', 290, 'eq.jpg', 6, 0),
(19, 'ต้นออมเงิน 6\"', 'A1', 239, 'ev.jpg', 6, 0),
(20, 'ต้นวาสนา 6\"', 'A1', 490, 'gu.jpg', 6, 0),
(21, 'ต้นวาสนา 8\"', 'A1', 590, '2e.jpg', 8, 0),
(22, 'ต้นวาสนา 10\"', 'A1', 790, 'dl.jpg', 10, 0),
(23, 'ต้นวาสนา 12\"', 'A1', 1290, 'ez.jpg', 12, 0),
(24, 'ต้นลิ้นมังกร 8\"', 'A2', 320, 'qq.jpg', 8, 0),
(25, 'ต้นลิ้นมังกร 10\"', 'A2', 390, 'ie.jpg', 10, 0),
(28, 'ต้นไทรใบสัก 15\"', 'A2', 2290, 'b7.jpg', 15, 0),
(30, 'ต้นปาล์มไผ่แคระ 8\"', 'A2', 690, 'j3.jpg', 8, 0),
(31, 'ต้นลิ้นมังกร (Golden Frame) 8\"', 'A1', 790, 'h4.jpg', 8, 0),
(32, 'ต้นลิ้นมังกร (โลตัส) 8\"', 'A1', 690, 'b5.jpg', 8, 0),
(33, 'ต้นออมนาค 6\"', 'A1', 239, 'qz.jpg', 6, 0),
(35, 'ฟิโลเดนดรอน เบอร์กิ้น 8\"', 'A2', 669, 'te.jpg', 8, 0),
(36, 'ต้นล่ำซำ 10\"', 'B2', 490, 'rm.jpg', 10, 0),
(37, 'ต้นดอนญ่า สีชมพู 10\"', 'B1', 390, 'z3.jpg', 10, 0),
(38, 'ต้นพุดน้ำบุศย์ 10\"', 'B2', 390, '76.jpg', 10, 0),
(39, 'ต้นโมกแคระ 10\"', 'B1', 450, 'g0.jpg', 10, 0),
(40, 'ต้นโมกแคระ 12\"', 'B1', 560, 'om.jpg', 12, 0),
(41, 'ต้นพุดบุญรักษา 10\"', 'B1', 420, '25.jpg', 10, 0),
(42, 'ต้นพุดบุญรักษา 15\"', 'B1', 990, '25.jpg', 15, 0),
(43, 'ต้นไข่มุกอันดามัน 6\"', 'B1', 390, '7o.jpg', 6, 0),
(44, 'ต้นกระดังงาสงขลา 10\"', 'B1', 390, 'ye.jpg', 10, 0),
(45, 'สนหอม 10\"', 'B1', 320, 'zo.jpg', 10, 0),
(46, 'ต้นแก้วเจ้าจอม 10\"', 'B2', 490, 'ou.jpg', 10, 0),
(49, 'ต้นสายน้ำผึ้ง 10”', 'B3', 420, 'sl.jpg', 10, 0),
(50, 'ต้นชมนาด 10\"', 'B1', 450, 'gs.jpg', 10, 0),
(51, 'ต้นชบาเมเปิ้ล 10\"', 'B1', 450, 'r8.jpg', 10, 0),
(52, 'ต้นชบาดอกซ้อน สีแดง 10\"', 'B1', 350, 'd5.jpg', 10, 0),
(53, 'ต้นเล็บมือนาง (ต้น) 10\"', 'B1', 420, 'sz.jpg', 10, 0),
(54, 'ต้นเล็บมือนาง (เลื้อย) 10\"', 'B1', 420, '3i.jpg', 10, 0),
(55, 'ต้นพุดสามสี 15\"', 'B1', 890, 'hv.jpg', 15, 0),
(56, 'ต้นพุดสามสี 10\"', 'B1', 420, 'i6.jpg', 10, 0),
(57, 'ต้นโยทะกาเลื้อย 10\"', 'B3', 450, 'p3.jpg', 10, 0),
(58, 'ต้นเข็มพิกุล 10\"', 'B1', 320, 'gy.jpg', 10, 0),
(59, 'ต้นหงส์ฟู่ 10\"', 'B1', 390, 'db.jpg', 10, 0),
(60, 'ต้นรักแรกพบ (สีชมพู) 11\"', 'B1', 320, 'w8.jpg', 11, 0),
(61, 'ต้นรักแรกพบ (สีเหลือง) 11\"', 'B1', 320, '2i.jpg', 11, 0),
(62, 'ต้นรักแรกพบ (สีส้ม) 11\"', 'B1', 320, 'fn.jpg', 11, 0),
(63, 'ต้นรักแรกพบ (สีแดง) 11\"', 'B1', 320, 'lr.jpg', 11, 0),
(64, 'ต้นเฟื่องฟ้าสาวิตรี 10\"', 'B3', 450, 'nt.jpg', 10, 0),
(65, 'ต้นเชอรี่แคระ กระถาง 10\"', 'B1', 390, 'y0.jpg', 10, 0),
(66, 'ต้นสนฉัตร 10\"', 'B2', 450, 'k6.jpg', 10, 0),
(67, 'ต้นสนฉัตร 15\"', 'B2', 1150, 'k6.jpg', 15, 0),
(68, 'ต้นชะแมบทอง 10\"', 'B1', 420, 'su.jpg', 10, 0),
(69, 'ต้นส้มจี๊ด 10\"', 'B1', 390, 'd0.jpg', 10, 0),
(70, 'ต้นส้มจี๊ด 12\"', 'B1', 490, 'd0.jpg', 12, 0),
(71, 'ต้นส้มจี๊ดด่าง 10\"', 'B1', 390, '67.jpg', 10, 0),
(72, 'ต้นนกน้อยนำโชค 8\"', 'B1', 290, 'h2.jpg', 8, 0),
(73, 'ต้นนกน้อยนำโชค 10\"', 'B1', 390, '7v.jpg', 10, 0),
(74, 'ต้นนกน้อยนำโชค 15\"', 'B1', 1290, 'xf.jpg', 15, 0),
(82, 'ต้นแก้วพวงดวงใจ 10\"', 'B1', 390, '9s.jpg', 10, 0),
(83, 'ต้นแก้วลิลลี่ 10\"', 'B1', 390, 'm8.jpg', 10, 0),
(84, 'ต้นแก้วแคระใบประยงค์ 10\"', 'B1', 490, 'bd.jpg', 10, 0),
(85, 'ต้นปีบยูนาน 10\"', 'B1', 350, '0y.jpg', 10, 0),
(86, 'ต้นลัดดาวัลย์ กระถาง 10\"', 'B3', 320, '8z.jpg', 10, 0),
(87, 'ต้นหอมเจ็ดชั้น 10\"', 'B2', 490, 'bi.jpg', 10, 0),
(88, 'ต้นหอมหมื่นลี้ 10\"', 'B2', 420, '7e.jpg', 10, 0),
(100, 'ต้นผีเสื้อแสนสวย 10\"', 'ฺB1', 420, 'jr.jpg', 10, 0),
(101, 'ต้นมิกกี้เมาส์ 10\"', 'B1', 450, 'n3.jpg', 10, 0),
(103, 'ต้นแย้มปีนัง 10\"', 'B1', 350, 'n0.jpg', 10, 0),
(104, 'ต้นเรดาร์ (หมวกจีน) 10\"', 'B1', 520, 'mu.jpg', 10, 0),
(105, 'ต้นทิวา 10\"', 'B1', 420, '0g.jpg', 10, 0),
(106, 'ต้นพุดชมพู 10\"', 'B1', 450, 'jq.jpg', 10, 0),
(107, 'ต้นพวงชมพู 10\"', 'B1', 420, 'd0.jpg', 10, 0),
(108, 'ต้นพวงชมพูดอกขาว 10\"', 'B1', 420, 'ca.jpg', 10, 0),
(109, 'ต้นจำปี (สีขาว) 10\"', 'B2', 320, '2g.jpg', 10, 0),
(118, 'ต้นเทียนหยดแคระ 10\"\r\n', 'B1', 350, 'v5.jpg', 10, 0),
(119, 'ต้นเทียนหยด 10\"', 'B1', 350, 'uj.jpg', 10, 0),
(120, 'ต้นสร้อยสายเพชร 10\"', 'B3', 450, 'bs.jpg', 10, 0),
(121, 'ต้นสร้อยสายเพชร กระถาง 10\"', 'B3', 450, '9y.jpg', 10, 0),
(122, 'ต้นแก้วมุกดา 10\"\r\n', 'B2', 420, 'o7.jpg', 10, 0),
(123, 'ต้นโซ่ทองคำ 8\"', 'B2', 250, 'y2.jpg', 8, 0),
(124, 'ต้นโซ่ทองคำ 10\"', 'B2', 420, '1f.jpg', 10, 0),
(125, 'ต้นหัวใจเศรษฐี 10\"', 'B1', 320, '0z.jpg', 10, 0),
(126, 'ต้นประยงค์ 10\"', 'B1', 420, 'sg.jpg', 10, 0),
(127, 'ต้นสาวสันทราย 10\"', 'B1', 450, 'jy.jpg', 10, 0),
(128, 'ต้นกระดิ่งนางฟ้า 11\"', 'B2', 420, 'co.jpg', 11, 0),
(129, 'ต้นเหลืองชัชวาลย์ 10\"', 'B3', 430, 'xd.jpg', 10, 0),
(130, 'ต้นเหลืองชัชวาลย์ 15\"', 'B3', 1290, 'xd.jpg', 15, 0),
(131, 'ต้นกุหลาบเลื้อย 10\"', 'B3', 420, 'my.jpg', 10, 0),
(132, 'ต้นม่วงเจริญ 10\"', 'B1', 350, 'z2.jpg', 10, 0),
(133, 'ต้นช้องนาง 10\"', 'B1', 350, 'lp.jpg', 10, 0),
(134, 'ต้นมังกรคาบแก้ว 10\"', 'B3', 390, 'qt.jpg', 10, 0),
(135, 'ต้นมังกรคาบแก้ว สีชมพู (พวงนาค) 10\"', 'B3', 390, '63.jpg', 10, 0),
(136, 'ต้นพวงครามออสเตรเลีย 11\"', 'B3', 390, 'o2.jpg', 11, 0),
(137, 'ต้นพวงครามออสเตรเลีย 15\"', 'B3', 1390, 'to.jpg', 15, 0),
(138, 'ต้นมะลุลี 10”', 'B1', 350, '35.jpg', 10, 0),
(139, 'ต้นมะลุลีแคระ กระถาง 10”', 'B1', 350, 'vk (1).jpg', 10, 0),
(140, 'ต้นมะลิซ้อน 10\"', 'B1', 290, '7b.jpg', 10, 0),
(141, 'ต้นมะลิลา 10\"', 'B1', 290, 'df.jpg', 10, 0),
(142, 'ต้นยี่หุบ 10\"', 'B1', 490, 'r0.jpg', 10, 0),
(143, 'ต้นพุดตาน 10\"', 'B1', 350, 'of.jpg', 10, 0),
(144, 'ต้นสนแผง 15\"', 'B1', 1290, 'br.jpg', 15, 0),
(145, 'ต้นสนใบพาย 11\"', 'B1', 450, '0u.jpg', 11, 0),
(146, 'ต้นทองหลางลาย 10\"', 'B2', 590, '4x.jpg', 10, 0),
(147, 'ต้นเกล็ดกระโห้ 10\"', 'B2', 390, '6b.jpg', 10, 0),
(148, 'ต้นทองหลางลาย กระถาง 12\"', 'B2', 690, 'ti.jpg', 12, 0),
(149, 'ต้นเกล็ดกระโห้ด่าง 10\"', 'B2', 390, '1g.jpg', 10, 0),
(150, 'ต้นเกล็ดกระโห้ด่าง 12\"', 'B2', 550, '4v.jpg', 12, 0),
(151, 'ต้นเป็ดแดง 10\"', 'B1', 350, 'nf.jpg', 10, 0),
(152, 'ต้นหนวดปลาหมึกด่างแคระ 10\"', 'B1', 350, 'y4.jpg', 10, 0),
(153, 'ต้นยางอินเดีย ด่างเหลือง 10\"', 'B2', 420, 'n2.jpg', 10, 0),
(154, 'ต้นซองออฟอินเดีย 10\"', 'B1', 420, '5r.jpg', 10, 0),
(156, 'ต้นเต่าร้างด่าง 8\"', 'B1', 420, 'i4.jpg', 8, 0),
(157, 'ต้นอินจัน 11\"', 'B2', 420, 'lq.jpg', 11, 0),
(158, 'ต้น โมจิโต้ (Holland) 4\"', 'A1', 1290, 'af.jpg', 4, 0),
(159, 'ต้น โมจิโต้ (Holland) 6\"', 'A1', 2290, 'af.jpg', 6, 0),
(160, 'ต้น โมจิโต้ (Holland) 8\"', 'A1', 4500, 'af.jpg', 8, 0),
(161, 'ต้นปาล์มศรีสยาม 10\"', 'B2', 890, '09.jpg', 10, 0),
(162, 'ต้นกรรณิการ์ 10\"', 'B2', 350, '1t.jpg', 10, 0),
(163, 'ต้นม่วงสาหรี่ 10\"', 'B2', 350, '1y.jpg', 10, 0),
(164, 'ต้นพุดลิลลี่ กระถาง 10\"', 'B1', 390, 'oo.jpg', 10, 0),
(165, 'ต้นแพรชมพู 10\"', 'B3', 390, '57.jpg', 10, 0),
(166, 'ต้นจันกะพ้อเลื้อย กระถาง 10\"', 'B3', 390, 'xw.jpg', 10, 0),
(167, 'ต้นองุ่นทะเล 8\"', 'B2', 390, 'fv.jpg', 8, 0),
(169, 'ต้นองุ่นทะเล 11\"', 'B2', 690, 'fv.jpg', 11, 0),
(170, 'ต้นสาลิกาลิ้นทอง 8\"', 'B1', 59, 'kd.jpg', 8, 0),
(171, 'ต้นสาลิกาลิ้นทอง 10\"', 'B1', 290, '6o.jpg', 10, 0),
(172, 'ต้นหลิวไต้หวันถัก 8\"', 'B1', 890, '58.jpg', 8, 0),
(173, 'test1', 'A1', 1, '', 0, 1),
(174, 'test1', 'A1', 1, '', 0, 1);

-- --------------------------------------------------------

--
-- Table structure for table `product_types`
--

CREATE TABLE `product_types` (
  `product_type_id` varchar(8) NOT NULL,
  `product_type` varchar(64) NOT NULL,
  `type_id` varchar(8) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_thai_520_w2;

--
-- Dumping data for table `product_types`
--

INSERT INTO `product_types` (`product_type_id`, `product_type`, `type_id`) VALUES
('A1', 'ต้นไม้มงคล', 'A'),
('A2', 'ต้นไม้ฟอกอากาศ', 'A'),
('A3', 'ต้นไม้ที่ดูแลง่าย', 'A'),
('B1', 'ไม้ทรงพุ่ม', 'ฺฺB'),
('B2', 'ต้นไม้ยืนต้น', 'B'),
('B3', 'ไม้เลื้อย', 'B');

-- --------------------------------------------------------

--
-- Table structure for table `roles`
--

CREATE TABLE `roles` (
  `role_id` int(11) NOT NULL,
  `role_name` varchar(64) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_thai_520_w2;

--
-- Dumping data for table `roles`
--

INSERT INTO `roles` (`role_id`, `role_name`) VALUES
(1, 'Administrator'),
(2, 'General');

-- --------------------------------------------------------

--
-- Table structure for table `types`
--

CREATE TABLE `types` (
  `type_id` varchar(8) NOT NULL,
  `type` varchar(32) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_thai_520_w2;

--
-- Dumping data for table `types`
--

INSERT INTO `types` (`type_id`, `type`) VALUES
('A', 'ตั้นไม้ภายในบ้าน'),
('ฺฺB', 'ตั้นไม้ภายนอก');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `user_id` int(11) NOT NULL,
  `user_name` varchar(32) NOT NULL,
  `user_type_id` int(11) NOT NULL,
  `user_pwd` varchar(32) NOT NULL,
  `first_name` varchar(64) NOT NULL,
  `last_name` varchar(64) NOT NULL,
  `email` varchar(64) NOT NULL,
  `role_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_thai_520_w2;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`user_id`, `user_name`, `user_type_id`, `user_pwd`, `first_name`, `last_name`, `email`, `role_id`) VALUES
(1, 'test1', 1, 'b59c67bf196a4758191e42f76670ceba', 'po', 'po', 'test@test', 1);

-- --------------------------------------------------------

--
-- Table structure for table `user_types`
--

CREATE TABLE `user_types` (
  `user_type_id` int(11) NOT NULL,
  `user_type_name` varchar(64) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_thai_520_w2;

--
-- Dumping data for table `user_types`
--

INSERT INTO `user_types` (`user_type_id`, `user_type_name`) VALUES
(1, 'ชาย'),
(2, 'หญิง'),
(3, 'ไม่ระบุ');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `order`
--
ALTER TABLE `order`
  ADD PRIMARY KEY (`order_id`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`product_id`);

--
-- Indexes for table `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`role_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`user_id`);

--
-- Indexes for table `user_types`
--
ALTER TABLE `user_types`
  ADD PRIMARY KEY (`user_type_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `order`
--
ALTER TABLE `order`
  MODIFY `order_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `product_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=175;

--
-- AUTO_INCREMENT for table `roles`
--
ALTER TABLE `roles`
  MODIFY `role_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `user_types`
--
ALTER TABLE `user_types`
  MODIFY `user_type_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
