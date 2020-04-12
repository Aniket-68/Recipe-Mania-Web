-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 12, 2020 at 05:53 AM
-- Server version: 10.4.6-MariaDB
-- PHP Version: 7.3.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `recipemania`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `username` text NOT NULL,
  `password` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `clientsub`
--

CREATE TABLE `clientsub` (
  `Rname` text NOT NULL,
  `Rtype` text NOT NULL,
  `Rcate` text NOT NULL,
  `Ingredients` text NOT NULL,
  `steps` text NOT NULL,
  `Description` text NOT NULL,
  `Rimg` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `contact`
--

CREATE TABLE `contact` (
  `Name` text NOT NULL,
  `Email` text NOT NULL,
  `phno` text NOT NULL,
  `message` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `ingredlist`
--

CREATE TABLE `ingredlist` (
  `ingredientid` int(11) NOT NULL,
  `ingredient` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `ingredlist`
--

INSERT INTO `ingredlist` (`ingredientid`, `ingredient`) VALUES
(1, 'carrot'),
(2, 'chicken'),
(3, 'chicken masala'),
(4, 'coriander'),
(5, 'egg'),
(6, 'pav'),
(7, 'cauliflower'),
(8, 'potato'),
(9, 'tomato'),
(10, 'onion'),
(11, 'chicken 65'),
(12, 'chilli'),
(13, 'capsicum'),
(14, 'capsicum');

-- --------------------------------------------------------

--
-- Table structure for table `recipes`
--

CREATE TABLE `recipes` (
  `RecipeId` int(11) NOT NULL,
  `Rname` text NOT NULL,
  `Rtype` text NOT NULL,
  `Rimg` text NOT NULL,
  `Rcate` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `recipes`
--

INSERT INTO `recipes` (`RecipeId`, `Rname`, `Rtype`, `Rimg`, `Rcate`) VALUES
(1, 'Chicken curry', 'non-veg', 'assets/img/contents/chicken-tikka.jpg', 'patta nahi'),
(2, 'Chicken Fried Rice', 'non-veg', 'assets/img/contents/c7771bf1204e6c59a605_550.jpg', 'patta nahi');

-- --------------------------------------------------------

--
-- Table structure for table `recipesprep`
--

CREATE TABLE `recipesprep` (
  `RecipeId` int(11) NOT NULL,
  `Ingredients` text NOT NULL,
  `steps` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `recipesprep`
--

INSERT INTO `recipesprep` (`RecipeId`, `Ingredients`, `steps`) VALUES
(1, '1,2,9,3', 'kuch nahi zomato karlo'),
(2, '10,4,9', 'kuch nahi');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `ingredlist`
--
ALTER TABLE `ingredlist`
  ADD PRIMARY KEY (`ingredientid`);

--
-- Indexes for table `recipes`
--
ALTER TABLE `recipes`
  ADD PRIMARY KEY (`RecipeId`);

--
-- Indexes for table `recipesprep`
--
ALTER TABLE `recipesprep`
  ADD PRIMARY KEY (`RecipeId`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `ingredlist`
--
ALTER TABLE `ingredlist`
  MODIFY `ingredientid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `recipes`
--
ALTER TABLE `recipes`
  MODIFY `RecipeId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `recipesprep`
--
ALTER TABLE `recipesprep`
  MODIFY `RecipeId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
