-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 23-01-2023 a las 22:57:36
-- Versión del servidor: 10.4.25-MariaDB
-- Versión de PHP: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `appwowti`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `almacenamientos`
--

CREATE TABLE `almacenamientos` (
  `id` int(11) NOT NULL,
  `nombre` varchar(20) NOT NULL,
  `descripcion` text NOT NULL,
  `precio` float NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `almacenamientos`
--

INSERT INTO `almacenamientos` (`id`, `nombre`, `descripcion`, `precio`, `createdAt`, `updatedAt`) VALUES
(1, 'Almacenamiento', '800 GB SSD', 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `asignacions`
--

CREATE TABLE `asignacions` (
  `id` int(11) NOT NULL,
  `idProducto` int(11) NOT NULL,
  `idUser` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish2_ci;

--
-- Volcado de datos para la tabla `asignacions`
--

INSERT INTO `asignacions` (`id`, `idProducto`, `idUser`, `createdAt`, `updatedAt`) VALUES
(1, 12241, 3, '2023-01-07 15:40:31', '2023-01-21 16:08:43'),
(4, 325533, 2, '2023-01-07 15:20:40', '2023-01-21 16:10:06');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `backupspaces`
--

CREATE TABLE `backupspaces` (
  `nombre` varchar(50) COLLATE utf8mb4_spanish2_ci NOT NULL,
  `descripcion` varchar(50) COLLATE utf8mb4_spanish2_ci NOT NULL,
  `precio` float NOT NULL,
  `id` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish2_ci;

--
-- Volcado de datos para la tabla `backupspaces`
--

INSERT INTO `backupspaces` (`nombre`, `descripcion`, `precio`, `id`, `createdAt`, `updatedAt`) VALUES
('backupspaces', 'Almacenamiento FTP de 100 GB', 5.79, 1, '2023-01-13 17:48:03', '2023-01-13 17:48:03'),
('backupspaces', 'none', 0, 2, '2023-01-23 21:37:02', '2023-01-23 21:37:02');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `bandwidths`
--

CREATE TABLE `bandwidths` (
  `id` int(11) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `descripcion` varchar(50) NOT NULL,
  `detalles` varchar(50) NOT NULL,
  `precio` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `bandwidths`
--

INSERT INTO `bandwidths` (`id`, `nombre`, `descripcion`, `detalles`, `precio`, `createdAt`, `updatedAt`) VALUES
(1, 'bandwidths', '32 TB + Unlimited InOut', '200 Mbit/s Connection', 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `complementos`
--

CREATE TABLE `complementos` (
  `id` int(11) NOT NULL,
  `ObjectStorage` int(11) NOT NULL,
  `BackupSpace` int(11) NOT NULL,
  `ServerManagement` int(11) NOT NULL,
  `Monitoring` int(11) NOT NULL,
  `sll_` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish2_ci;

--
-- Volcado de datos para la tabla `complementos`
--

INSERT INTO `complementos` (`id`, `ObjectStorage`, `BackupSpace`, `ServerManagement`, `Monitoring`, `sll_`, `createdAt`, `updatedAt`) VALUES
(1, 1, 1, 1, 1, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `compras`
--

CREATE TABLE `compras` (
  `id` int(11) NOT NULL,
  `idUser` int(11) NOT NULL,
  `total` float NOT NULL,
  `estado` tinyint(4) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish2_ci;

--
-- Volcado de datos para la tabla `compras`
--

INSERT INTO `compras` (`id`, `idUser`, `total`, `estado`, `createdAt`, `updatedAt`) VALUES
(1, 2, 47, 1, '2023-01-14 18:50:56', '2023-01-20 16:15:06'),
(2, 8, 69, 1, '2023-01-16 17:51:10', '2023-01-20 16:17:07'),
(3, 4, 350.444, 1, '2023-01-19 16:50:38', '2023-01-20 16:18:53');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `detalle_compras`
--

CREATE TABLE `detalle_compras` (
  `id` int(11) NOT NULL,
  `id_compra` int(11) NOT NULL,
  `cantidad` int(11) NOT NULL,
  `idMaquina` int(11) NOT NULL,
  `precioUnitario` float NOT NULL,
  `importe` float NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish2_ci;

--
-- Volcado de datos para la tabla `detalle_compras`
--

INSERT INTO `detalle_compras` (`id`, `id_compra`, `cantidad`, `idMaquina`, `precioUnitario`, `importe`, `createdAt`, `updatedAt`) VALUES
(1, 1, 2, 1, 18.38, 36.76, '2023-01-14 18:47:41', '2023-01-14 18:47:41'),
(2, 1, 2, 1, 27.16, 36.76, '2023-01-14 19:19:48', '2023-01-14 19:19:48'),
(3, 2, 1, 1, 27.16, 27.16, '2023-01-16 17:51:39', '2023-01-16 17:51:39'),
(4, 2, 2, 1, 27.16, 54.32, '2023-01-16 17:52:19', '2023-01-16 17:52:19'),
(5, 3, 1, 1, 27.16, 27.16, '2023-01-19 17:08:29', '2023-01-19 17:08:29');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ipv4s`
--

CREATE TABLE `ipv4s` (
  `id` int(11) NOT NULL,
  `nombre` varchar(50) COLLATE utf8mb4_spanish2_ci NOT NULL,
  `descripcion` text COLLATE utf8mb4_spanish2_ci NOT NULL,
  `cantidad` int(11) NOT NULL,
  `precio` float NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish2_ci;

--
-- Volcado de datos para la tabla `ipv4s`
--

INSERT INTO `ipv4s` (`id`, `nombre`, `descripcion`, `cantidad`, `precio`, `createdAt`, `updatedAt`) VALUES
(1, 'ipv4', 'direcci ón IP', 1, 0, '2023-01-13 21:12:25', '2023-01-13 21:12:25'),
(2, 'ipv4', 'dereccion ip', 2, 4.59, '2023-01-23 21:24:06', '2023-01-23 21:24:06');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `maquinas`
--

CREATE TABLE `maquinas` (
  `id` int(11) NOT NULL,
  `region` int(11) NOT NULL,
  `id_almacenamiento` int(11) NOT NULL,
  `sistemaOperativo` int(11) NOT NULL,
  `redes` int(11) NOT NULL,
  `complementos` int(11) NOT NULL,
  `duracionPlazo` varchar(250) COLLATE utf8mb4_spanish2_ci NOT NULL,
  `id_producMaquina` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish2_ci;

--
-- Volcado de datos para la tabla `maquinas`
--

INSERT INTO `maquinas` (`id`, `region`, `id_almacenamiento`, `sistemaOperativo`, `redes`, `complementos`, `duracionPlazo`, `id_producMaquina`, `createdAt`, `updatedAt`) VALUES
(1, 1, 1, 1, 1, 1, '1 mes', 1, '2023-01-12 21:49:20', '2023-01-12 21:49:20'),
(2, 1, 1, 1, 1, 1, '1 mes', 2, '2023-01-12 21:49:20', '2023-01-12 21:49:20');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `monitorings`
--

CREATE TABLE `monitorings` (
  `id` int(11) NOT NULL,
  `nombre` varchar(50) COLLATE utf8mb4_spanish2_ci NOT NULL,
  `descripcion` text COLLATE utf8mb4_spanish2_ci NOT NULL,
  `precio` float NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish2_ci;

--
-- Volcado de datos para la tabla `monitorings`
--

INSERT INTO `monitorings` (`id`, `nombre`, `descripcion`, `precio`, `createdAt`, `updatedAt`) VALUES
(1, '  Full Monitoring', 'Full', 14.99, '2023-01-13 17:43:55', '2023-01-13 17:43:55'),
(2, 'monitorings', 'none', 0, '2023-01-23 21:45:38', '2023-01-23 21:45:38');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `objectstorages`
--

CREATE TABLE `objectstorages` (
  `nombre` varchar(50) COLLATE utf8mb4_spanish2_ci NOT NULL,
  `descripcion` varchar(100) COLLATE utf8mb4_spanish2_ci NOT NULL,
  `precio` float NOT NULL,
  `id` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish2_ci;

--
-- Volcado de datos para la tabla `objectstorages`
--

INSERT INTO `objectstorages` (`nombre`, `descripcion`, `precio`, `id`, `createdAt`, `updatedAt`) VALUES
('objectstorages', 'object full 200 gb', 2.59, 1, '2023-01-13 17:46:30', '2023-01-13 17:46:30'),
('objectStorage', 'none', 0, 2, '2023-01-23 21:34:36', '2023-01-23 21:34:36');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `panelsapps`
--

CREATE TABLE `panelsapps` (
  `id` int(11) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `descripcion` text NOT NULL,
  `precio` float NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `panelsapps`
--

INSERT INTO `panelsapps` (`id`, `nombre`, `descripcion`, `precio`, `createdAt`, `updatedAt`) VALUES
(1, 'cPanel', 'cPanel/WHM (5 accounts)', 20.99, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(2, 'cPanel', 'cPanel/WHM (30 accounts)', 25.99, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(3, 'cPanel', 'cPanel/WHM (50 accounts)', 38.99, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(4, 'cPanel', 'cPanel/WHM (100 accounts)', 50.99, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(5, 'cPanel', 'cPanel/WHM (150 accounts)', 59.99, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(6, 'cPanel', 'cPanel/WHM (200 accounts)', 76.99, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(7, 'cPanel', 'cPanel/WHM (250 accounts)', 93.99, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(8, 'cPanel', 'cPanel/WHM (300 accounts)', 110.99, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(9, 'cPanel', 'cPanel/WHM (350 accounts)', 127.99, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(10, 'cPanel', 'cPanel/WHM (400 accounts)', 144.99, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(11, 'cPanel', 'cPanel/WHM (450 accounts)', 161.99, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(12, 'cPanel', 'cPanel/WHM (500 accounts)', 178.99, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(13, 'cPanel', 'cPanel/WHM (550 accounts)', 195.99, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(14, 'cPanel', 'cPanel/WHM (600 accounts)', 212.99, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(15, 'cPanel', 'cPanel/WHM (650 accounts)', 229.99, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(16, 'cPanel', 'cPanel/WHM (700 accounts)', 246.99, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(17, 'cPanel', 'cPanel/WHM (750 accounts)', 263.99, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(18, 'cPanel', 'cPanel/WHM (800 accounts)', 280.99, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(19, 'cPanel', 'cPanel/WHM (850 accounts)', 297.99, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(20, 'cPanel', 'cPanel/WHM (900 accounts)', 314.99, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(21, 'cPanel', 'cPanel/WHM (950 accounts)', 331.99, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(22, 'cPanel', 'cPanel/WHM (1000 accounts)', 348.99, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(23, 'Plesk + Windows', 'Plesk Obsidian Web Admin Edition ', 12.49, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(24, 'Plesk + Windows', 'Plesk Obsidian WebHost Edition ', 28.49, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(25, 'Plesk + Windows', 'Plesk Obsidian Web Pro Edition  ', 17.99, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(26, 'Plesk + Linux', 'Plesk Obsidian Web Admin Edition  ', 12.49, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(27, 'Plesk + Linux', 'Plesk Obsidian Web Host Edition', 28.49, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(28, 'Plesk + Linux', 'Plesk Obsidian Web Pro Edition', 17.99, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(31, 'Webmin + LAMP', '1', 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(32, 'Docker', '1', 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(33, 'LAMP', '1', 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(34, 'Webmin', '1', 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productmaquinas`
--

CREATE TABLE `productmaquinas` (
  `id` int(11) NOT NULL,
  `nombre` varchar(50) COLLATE utf8mb4_spanish2_ci NOT NULL,
  `descripcion` text COLLATE utf8mb4_spanish2_ci NOT NULL,
  `precio` float NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish2_ci;

--
-- Volcado de datos para la tabla `productmaquinas`
--

INSERT INTO `productmaquinas` (`id`, `nombre`, `descripcion`, `precio`, `createdAt`, `updatedAt`) VALUES
(1, 'Cloud VPS S', 'Our most popular VPS. 8 CPU Cores & 30 GB RAM do the job!', 18.38, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(2, 'Cloud VPS S', 'The cheapest way to get your own independent computing instance.', 6.53, '0000-00-00 00:00:00', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `redescomplementos`
--

CREATE TABLE `redescomplementos` (
  `id` int(11) NOT NULL,
  `id_redPrivada` int(11) NOT NULL,
  `id_bandwidth` int(11) NOT NULL,
  `id_ipv4` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `redescomplementos`
--

INSERT INTO `redescomplementos` (`id`, `id_redPrivada`, `id_bandwidth`, `id_ipv4`, `createdAt`, `updatedAt`) VALUES
(1, 1, 1, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `redesprivadas`
--

CREATE TABLE `redesprivadas` (
  `id` int(11) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `descripcion` text NOT NULL,
  `precio` float NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `redesprivadas`
--

INSERT INTO `redesprivadas` (`id`, `nombre`, `descripcion`, `precio`, `createdAt`, `updatedAt`) VALUES
(1, 'red privada', 'Redes privadas habilitadas', 2.99, '0000-00-00 00:00:00', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `regiones`
--

CREATE TABLE `regiones` (
  `id` int(11) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `descripcion` text NOT NULL,
  `precio` float NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `regiones`
--

INSERT INTO `regiones` (`id`, `nombre`, `descripcion`, `precio`, `createdAt`, `updatedAt`) VALUES
(1, 'European Union (Germany)', 'free', 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(2, 'United Kingdom', 'not free', 0.72, '2023-01-23 21:00:38', '2023-01-23 21:00:38');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `servermanagements`
--

CREATE TABLE `servermanagements` (
  `nombre` varchar(50) COLLATE utf8mb4_spanish2_ci NOT NULL,
  `precio` float NOT NULL,
  `id` int(11) NOT NULL,
  `descripcion` text COLLATE utf8mb4_spanish2_ci NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish2_ci;

--
-- Volcado de datos para la tabla `servermanagements`
--

INSERT INTO `servermanagements` (`nombre`, `precio`, `id`, `descripcion`, `createdAt`, `updatedAt`) VALUES
('Server Management', 144.99, 1, 'Managed', '2023-01-13 17:48:47', '2023-01-13 17:48:47'),
(' servermanagements', 0, 2, 'Unmanaged', '2023-01-23 21:41:51', '2023-01-23 21:41:51');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `sistemaos`
--

CREATE TABLE `sistemaos` (
  `id` int(11) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `descripcion` text NOT NULL,
  `precio` float NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `sistemaos`
--

INSERT INTO `sistemaos` (`id`, `nombre`, `descripcion`, `precio`, `createdAt`, `updatedAt`) VALUES
(1, 'Ubuntu', 'Ubuntu 20.04', 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `slls`
--

CREATE TABLE `slls` (
  `id` int(11) NOT NULL,
  `nombre` varchar(50) COLLATE utf8mb4_spanish2_ci NOT NULL,
  `descripcion` text COLLATE utf8mb4_spanish2_ci NOT NULL,
  `precio` float NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish2_ci;

--
-- Volcado de datos para la tabla `slls`
--

INSERT INTO `slls` (`id`, `nombre`, `descripcion`, `precio`, `createdAt`, `updatedAt`) VALUES
(1, 'sll', 'SSL certificate', 89.99, '2023-01-13 17:49:24', '2023-01-13 17:49:24'),
(2, 'sll', 'none', 0, '2023-01-23 21:49:19', '2023-01-23 21:49:19');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL,
  `nombre` varchar(100) COLLATE utf8mb4_spanish2_ci NOT NULL,
  `email` varchar(100) COLLATE utf8mb4_spanish2_ci NOT NULL,
  `contraseña` varchar(200) COLLATE utf8mb4_spanish2_ci NOT NULL,
  `N_identificacion` int(20) NOT NULL,
  `estado` tinyint(4) NOT NULL,
  `role` varchar(50) COLLATE utf8mb4_spanish2_ci NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish2_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `nombre`, `email`, `contraseña`, `N_identificacion`, `estado`, `role`, `createdAt`, `updatedAt`) VALUES
(1, 'Luis florez', 'florezgilluisantony@gmail.com', 'luis1234567', 1002028561, 1, 'ADMIN', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(2, 'alfred', 'alfred@gmail.com', 'alfred321', 2147483647, 1, 'USER', '0000-00-00 00:00:00', '2023-01-06 16:38:53'),
(3, 'robert', 'robert@gmail.com', 'robert987', 1002458756, 1, 'USER', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(4, 'josena jera', 'josenajera@gmail.com', 'josenajera78', 1003654125, 1, 'USER', '2023-01-06 14:34:19', '2023-01-06 14:34:19'),
(6, 'pedro', 'pedro@gmail.com', 'pedro524', 1000235648, 1, 'USER', '2023-01-06 15:10:18', '2023-01-06 15:10:18'),
(7, 'migel', 'migel@gmail.com', 'migel524', 1047483612, 0, 'USER', '2023-01-06 15:11:11', '2023-01-06 16:37:14'),
(8, 'morris', 'morris@gmail.com', 'morris524', 100202456, 1, 'USER', '2023-01-06 15:37:30', '2023-01-06 15:37:30'),
(9, 'franco', 'franco@gmail.com', '12345678', 100254584, 1, 'USER', '2023-01-06 15:37:58', '2023-01-06 15:37:58'),
(10, 'el hombre caiman ', 'franco1@gmail.com', '12345678', 10022141, 1, 'USER', '2023-01-23 16:56:02', '2023-01-23 16:56:02');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `almacenamientos`
--
ALTER TABLE `almacenamientos`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `asignacions`
--
ALTER TABLE `asignacions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idUser` (`idUser`);

--
-- Indices de la tabla `backupspaces`
--
ALTER TABLE `backupspaces`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `bandwidths`
--
ALTER TABLE `bandwidths`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `complementos`
--
ALTER TABLE `complementos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `ObjectStorage` (`ObjectStorage`),
  ADD KEY `BackupSpace` (`BackupSpace`),
  ADD KEY `ServerManagement` (`ServerManagement`),
  ADD KEY `Monitoring` (`Monitoring`),
  ADD KEY `sll_` (`sll_`);

--
-- Indices de la tabla `compras`
--
ALTER TABLE `compras`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idUser` (`idUser`);

--
-- Indices de la tabla `detalle_compras`
--
ALTER TABLE `detalle_compras`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_compra` (`id_compra`),
  ADD KEY `idMaquina` (`idMaquina`);

--
-- Indices de la tabla `ipv4s`
--
ALTER TABLE `ipv4s`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `maquinas`
--
ALTER TABLE `maquinas`
  ADD PRIMARY KEY (`id`),
  ADD KEY `complementos` (`complementos`),
  ADD KEY `region` (`region`),
  ADD KEY `almacenamiento` (`id_almacenamiento`),
  ADD KEY `sistemaOperativo` (`sistemaOperativo`),
  ADD KEY `redes` (`redes`),
  ADD KEY `id_producMaquina` (`id_producMaquina`);

--
-- Indices de la tabla `monitorings`
--
ALTER TABLE `monitorings`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `objectstorages`
--
ALTER TABLE `objectstorages`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `panelsapps`
--
ALTER TABLE `panelsapps`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `productmaquinas`
--
ALTER TABLE `productmaquinas`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `redescomplementos`
--
ALTER TABLE `redescomplementos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_ipv4` (`id_ipv4`),
  ADD KEY `id_bandwidth` (`id_bandwidth`),
  ADD KEY `id_redPrivada` (`id_redPrivada`);

--
-- Indices de la tabla `redesprivadas`
--
ALTER TABLE `redesprivadas`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `regiones`
--
ALTER TABLE `regiones`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `servermanagements`
--
ALTER TABLE `servermanagements`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `sistemaos`
--
ALTER TABLE `sistemaos`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `slls`
--
ALTER TABLE `slls`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `almacenamientos`
--
ALTER TABLE `almacenamientos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `asignacions`
--
ALTER TABLE `asignacions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT de la tabla `backupspaces`
--
ALTER TABLE `backupspaces`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `bandwidths`
--
ALTER TABLE `bandwidths`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `complementos`
--
ALTER TABLE `complementos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `compras`
--
ALTER TABLE `compras`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `detalle_compras`
--
ALTER TABLE `detalle_compras`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `ipv4s`
--
ALTER TABLE `ipv4s`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `maquinas`
--
ALTER TABLE `maquinas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `monitorings`
--
ALTER TABLE `monitorings`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `objectstorages`
--
ALTER TABLE `objectstorages`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `productmaquinas`
--
ALTER TABLE `productmaquinas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `redescomplementos`
--
ALTER TABLE `redescomplementos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `redesprivadas`
--
ALTER TABLE `redesprivadas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `regiones`
--
ALTER TABLE `regiones`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de la tabla `servermanagements`
--
ALTER TABLE `servermanagements`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `sistemaos`
--
ALTER TABLE `sistemaos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `slls`
--
ALTER TABLE `slls`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `asignacions`
--
ALTER TABLE `asignacions`
  ADD CONSTRAINT `asignacions_ibfk_1` FOREIGN KEY (`idUser`) REFERENCES `usuarios` (`id`);

--
-- Filtros para la tabla `complementos`
--
ALTER TABLE `complementos`
  ADD CONSTRAINT `complementos_ibfk_1` FOREIGN KEY (`ObjectStorage`) REFERENCES `objectstorages` (`id`),
  ADD CONSTRAINT `complementos_ibfk_2` FOREIGN KEY (`BackupSpace`) REFERENCES `backupspaces` (`id`),
  ADD CONSTRAINT `complementos_ibfk_3` FOREIGN KEY (`ServerManagement`) REFERENCES `servermanagements` (`id`),
  ADD CONSTRAINT `complementos_ibfk_4` FOREIGN KEY (`Monitoring`) REFERENCES `monitorings` (`id`),
  ADD CONSTRAINT `complementos_ibfk_5` FOREIGN KEY (`sll_`) REFERENCES `slls` (`id`);

--
-- Filtros para la tabla `compras`
--
ALTER TABLE `compras`
  ADD CONSTRAINT `compras_ibfk_1` FOREIGN KEY (`idUser`) REFERENCES `usuarios` (`id`);

--
-- Filtros para la tabla `detalle_compras`
--
ALTER TABLE `detalle_compras`
  ADD CONSTRAINT `detalle_compras_ibfk_1` FOREIGN KEY (`id_compra`) REFERENCES `compras` (`id`),
  ADD CONSTRAINT `detalle_compras_ibfk_2` FOREIGN KEY (`idMaquina`) REFERENCES `maquinas` (`id`);

--
-- Filtros para la tabla `maquinas`
--
ALTER TABLE `maquinas`
  ADD CONSTRAINT `maquinas_ibfk_1` FOREIGN KEY (`complementos`) REFERENCES `complementos` (`id`),
  ADD CONSTRAINT `maquinas_ibfk_2` FOREIGN KEY (`region`) REFERENCES `regiones` (`id`),
  ADD CONSTRAINT `maquinas_ibfk_3` FOREIGN KEY (`id_almacenamiento`) REFERENCES `almacenamientos` (`id`),
  ADD CONSTRAINT `maquinas_ibfk_4` FOREIGN KEY (`sistemaOperativo`) REFERENCES `sistemaos` (`id`),
  ADD CONSTRAINT `maquinas_ibfk_5` FOREIGN KEY (`redes`) REFERENCES `redescomplementos` (`id`),
  ADD CONSTRAINT `maquinas_ibfk_6` FOREIGN KEY (`id_producMaquina`) REFERENCES `productmaquinas` (`id`);

--
-- Filtros para la tabla `redescomplementos`
--
ALTER TABLE `redescomplementos`
  ADD CONSTRAINT `redescomplementos_ibfk_1` FOREIGN KEY (`id_ipv4`) REFERENCES `ipv4s` (`id`),
  ADD CONSTRAINT `redescomplementos_ibfk_2` FOREIGN KEY (`id_bandwidth`) REFERENCES `bandwidths` (`id`),
  ADD CONSTRAINT `redescomplementos_ibfk_3` FOREIGN KEY (`id_redPrivada`) REFERENCES `redesprivadas` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
