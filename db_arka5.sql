-- phpMyAdmin SQL Dump
-- version 3.5.2
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Jan 25, 2020 at 03:46 PM
-- Server version: 5.5.25a
-- PHP Version: 5.4.4

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `db_arka5`
--

-- --------------------------------------------------------

--
-- Table structure for table `cashier`
--

CREATE TABLE IF NOT EXISTS `cashier` (
  `id` int(100) NOT NULL AUTO_INCREMENT,
  `namecas` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=4 ;

--
-- Dumping data for table `cashier`
--

INSERT INTO `cashier` (`id`, `namecas`) VALUES
(1, 'Pevita Pearce'),
(2, 'Raisa Andriana'),
(3, 'Syaifudin Fendi');

-- --------------------------------------------------------

--
-- Table structure for table `category`
--

CREATE TABLE IF NOT EXISTS `category` (
  `id` int(100) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=3 ;

--
-- Dumping data for table `category`
--

INSERT INTO `category` (`id`, `name`) VALUES
(1, 'Food'),
(2, 'Drink');

-- --------------------------------------------------------

--
-- Table structure for table `product`
--

CREATE TABLE IF NOT EXISTS `product` (
  `id` int(100) NOT NULL AUTO_INCREMENT,
  `product` varchar(100) DEFAULT NULL,
  `price` int(100) DEFAULT NULL,
  `id_category` int(100) DEFAULT NULL,
  `id_cashier` int(100) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `id_category` (`id_category`),
  KEY `id_cashier` (`id_cashier`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=4 ;

--
-- Dumping data for table `product`
--

INSERT INTO `product` (`id`, `product`, `price`, `id_category`, `id_cashier`) VALUES
(1, 'Latte', 10000, 2, 1),
(2, 'Cake', 20000, 1, 2),
(3, 'Ramen', 18000, 1, 3);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `product`
--
ALTER TABLE `product`
  ADD CONSTRAINT `product_ibfk_1` FOREIGN KEY (`id_category`) REFERENCES `category` (`id`),
  ADD CONSTRAINT `product_ibfk_2` FOREIGN KEY (`id_cashier`) REFERENCES `cashier` (`id`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
