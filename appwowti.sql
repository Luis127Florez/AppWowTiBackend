-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 13-01-2023 a las 20:08:42
-- Versión del servidor: 10.4.21-MariaDB
-- Versión de PHP: 8.0.11

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
  `idAlmacenamiento` int(11) NOT NULL,
  `tamañoAlmacenamiento` varchar(45) NOT NULL,
  `precioAlmacenamiento` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `almacenamientos`
--

INSERT INTO `almacenamientos` (`idAlmacenamiento`, `tamañoAlmacenamiento`, `precioAlmacenamiento`) VALUES
(1, '800 GB SSD', 0),
(2, ' 1.2 TB SSD', 4.8),
(3, ' 200 GB NVMe', 0),
(4, '400 GB NVMe', 4.8);

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
(1, 12250, 3, '2023-01-07 15:40:31', '2023-01-07 15:40:31'),
(4, 525533, 2, '2023-01-07 15:20:40', '2023-01-07 16:12:48'),
(5, 69584, 2, '2023-01-07 15:42:34', '2023-01-07 15:42:34');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `bandwidth`
--

CREATE TABLE `bandwidth` (
  `id` int(11) NOT NULL,
  `descripcion` varchar(50) NOT NULL,
  `detalles` varchar(50) NOT NULL,
  `precio` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `bandwidth`
--

INSERT INTO `bandwidth` (`id`, `descripcion`, `detalles`, `precio`) VALUES
(1, '32 TB + Unlimited InOut', '200 Mbit/s Connection', 0);

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
(1, 2, 91.08, 1, '2023-01-12 21:47:05', '2023-01-12 21:47:05');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `detallecompra`
--

CREATE TABLE `detallecompra` (
  `id_compra` int(11) NOT NULL,
  `cantidad` int(11) NOT NULL,
  `idMaquina` int(11) NOT NULL,
  `precioUnitario` float NOT NULL,
  `importe` float NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish2_ci;

--
-- Volcado de datos para la tabla `detallecompra`
--

INSERT INTO `detallecompra` (`id_compra`, `cantidad`, `idMaquina`, `precioUnitario`, `importe`, `createdAt`, `updatedAt`) VALUES
(1, 2, 1, 18.38, 36.76, '2023-01-12 22:29:28', '2023-01-12 22:29:28'),
(1, 2, 2, 27.16, 54.32, '2023-01-12 22:32:44', '2023-01-12 22:32:44');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `maquinas`
--

CREATE TABLE `maquinas` (
  `id` int(11) NOT NULL,
  `descripcion` varchar(50) COLLATE utf8mb4_spanish2_ci NOT NULL,
  `region` varchar(250) COLLATE utf8mb4_spanish2_ci NOT NULL,
  `almacenamiento` varchar(350) COLLATE utf8mb4_spanish2_ci NOT NULL,
  `sistemaOperativo` varchar(250) COLLATE utf8mb4_spanish2_ci NOT NULL,
  `redes` longtext COLLATE utf8mb4_spanish2_ci NOT NULL,
  `complementos` longtext COLLATE utf8mb4_spanish2_ci NOT NULL,
  `duracionPlazo` varchar(250) COLLATE utf8mb4_spanish2_ci NOT NULL,
  `precio` float NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish2_ci;

--
-- Volcado de datos para la tabla `maquinas`
--

INSERT INTO `maquinas` (`id`, `descripcion`, `region`, `almacenamiento`, `sistemaOperativo`, `redes`, `complementos`, `duracionPlazo`, `precio`, `createdAt`, `updatedAt`) VALUES
(1, 'Cloud VPS S', 'European Union (Germany)', '{tamaño: 200 , tipo:\"GB\" , disco:\"SSD\"}', 'Windows Server', '{PrivateNetworking:\"No Private Networking\",Bandwidth:\"32 tv out\", IPv4:\"1 Ip address\"}', '{ObjectStorage:\"none\", BackupSpace:\"none\", ServerManagement:\"unmanaged\",Monitoring:\"none\", sll:\"none\"}', '1 mes', 18.38, '2023-01-12 21:49:20', '2023-01-12 21:49:20'),
(2, 'Cloud VPS S', 'United States (West)', '{tamaño: 400 , tipo:\"GB\" , disco:\"SSD\"}', 'ubuntu 4.0', '{PrivateNetworking:\"No Private Networking\",Bandwidth:\"32 tv out\", IPv4:\"1 Ip address\"}', '{ObjectStorage:\"500 GB Object Storage in United States\", BackupSpace:\"none\", ServerManagement:\"unmanaged\",Monitoring:\"none\", sll:\"none\"}', '1 mes', 27.16, '2023-01-12 21:49:20', '2023-01-12 21:49:20');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `panelsapps`
--

CREATE TABLE `panelsapps` (
  `id` int(11) NOT NULL,
  `tipo` varchar(50) NOT NULL,
  `version` varchar(50) NOT NULL,
  `precio` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `panelsapps`
--

INSERT INTO `panelsapps` (`id`, `tipo`, `version`, `precio`) VALUES
(1, 'cPanel', 'cPanel/WHM (5 accounts)', 20.99),
(2, 'cPanel', 'cPanel/WHM (30 accounts)', 25.99),
(3, 'cPanel', 'cPanel/WHM (50 accounts)', 38.99),
(4, 'cPanel', 'cPanel/WHM (100 accounts)', 50.99),
(5, 'cPanel', 'cPanel/WHM (150 accounts)', 59.99),
(6, 'cPanel', 'cPanel/WHM (200 accounts)', 76.99),
(7, 'cPanel', 'cPanel/WHM (250 accounts)', 93.99),
(8, 'cPanel', 'cPanel/WHM (300 accounts)', 110.99),
(9, 'cPanel', 'cPanel/WHM (350 accounts)', 127.99),
(10, 'cPanel', 'cPanel/WHM (400 accounts)', 144.99),
(11, 'cPanel', 'cPanel/WHM (450 accounts)', 161.99),
(12, 'cPanel', 'cPanel/WHM (500 accounts)', 178.99),
(13, 'cPanel', 'cPanel/WHM (550 accounts)', 195.99),
(14, 'cPanel', 'cPanel/WHM (600 accounts)', 212.99),
(15, 'cPanel', 'cPanel/WHM (650 accounts)', 229.99),
(16, 'cPanel', 'cPanel/WHM (700 accounts)', 246.99),
(17, 'cPanel', 'cPanel/WHM (750 accounts)', 263.99),
(18, 'cPanel', 'cPanel/WHM (800 accounts)', 280.99),
(19, 'cPanel', 'cPanel/WHM (850 accounts)', 297.99),
(20, 'cPanel', 'cPanel/WHM (900 accounts)', 314.99),
(21, 'cPanel', 'cPanel/WHM (950 accounts)', 331.99),
(22, 'cPanel', 'cPanel/WHM (1000 accounts)', 348.99),
(23, 'Plesk + Windows', 'Plesk Obsidian Web Admin Edition ', 12.49),
(24, 'Plesk + Windows', 'Plesk Obsidian WebHost Edition ', 28.49),
(25, 'Plesk + Windows', 'Plesk Obsidian Web Pro Edition  ', 17.99),
(26, 'Plesk + Linux', 'Plesk Obsidian Web Admin Edition  ', 12.49),
(27, 'Plesk + Linux', 'Plesk Obsidian Web Host Edition', 28.49),
(28, 'Plesk + Linux', 'Plesk Obsidian Web Pro Edition', 17.99),
(31, 'Webmin + LAMP', '1', 0),
(32, 'Docker', '1', 0),
(33, 'LAMP', '1', 0),
(34, 'Webmin', '1', 0);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `redescomplemento`
--

CREATE TABLE `redescomplemento` (
  `id` int(11) NOT NULL,
  `id_redPrivada` int(11) NOT NULL,
  `id_bandwidth` int(11) NOT NULL,
  `id_ipv4` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `redesprivadas`
--

CREATE TABLE `redesprivadas` (
  `id` int(11) NOT NULL,
  `descripcion` varchar(50) NOT NULL,
  `precio` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `redesprivadas`
--

INSERT INTO `redesprivadas` (`id`, `descripcion`, `precio`) VALUES
(1, 'No Private NetWorking', 0),
(2, 'Private Networking Enabled', 2.99);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `regiones`
--

CREATE TABLE `regiones` (
  `idRegiones` int(11) NOT NULL,
  `nombreRegion` varchar(50) NOT NULL,
  `precioUnitarioRegion` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `regiones`
--

INSERT INTO `regiones` (`idRegiones`, `nombreRegion`, `precioUnitarioRegion`) VALUES
(1, 'European Union (Germany)', 0),
(3, 'United Kingdom', 4.5),
(4, 'United States (Central)', 4.05),
(5, 'United States (East)', 5.5),
(6, 'United States (West)', 6.3),
(7, 'Asia (Singapore)', 5.955),
(8, 'Australia (Sydney)', 9.65545);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `sistemaos`
--

CREATE TABLE `sistemaos` (
  `id` int(11) NOT NULL,
  `tipo` varchar(50) NOT NULL,
  `versionSO` varchar(50) NOT NULL,
  `precio` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `sistemaos`
--

INSERT INTO `sistemaos` (`id`, `tipo`, `versionSO`, `precio`) VALUES
(1, 'Ubuntu', 'Ubuntu 20.04', 0),
(2, 'Ubuntu ', 'Ubuntu 22.04', 0),
(3, 'Custom Images', 'Use your existing Custom image storage', 1.49),
(4, 'Custom Images', 'Add Custom existing Storage (25 GB)', 1.49),
(5, 'Windows Server', 'Windows Server 2016 Datacenter', 7.26),
(6, 'Windows Server', 'Windows Server 2019 Datacenter', 8.99),
(7, 'Windows Server', 'Windows Server 2022 Datacenter', 8.99),
(8, 'Windows Server', 'Windows Server 2012R2 Datacenter', 7.29),
(9, 'Cent OS & RHEL Variants', 'Cent OS 7', 0),
(10, 'Cent OS & RHEL Variants', 'AlmaLinux 9', 0),
(11, 'Cent OS & RHEL Variants', 'AlmaLinux 8', 0),
(12, 'Cent OS & RHEL Variants', 'Rocky Linux 9', 0),
(13, 'Cent OS & RHEL Variants', 'Rocky Linux 8', 0),
(14, 'Debian', 'Debian 11', 0),
(15, 'Debian', 'Debian 10', 0),
(16, 'AlmaLinux', 'AlmaLinux 9', 0),
(17, 'AlmaLinux', 'AlmaLinux 8', 0),
(18, 'Rocky Linux', 'Rocky Linux 9 ', 0),
(19, 'Rocky Linux', 'Rocky Linux 8', 0);

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
(1, 'Luis florez', 'florezgilluisantony@gmail.com', 'luis123', 1002028561, 1, 'ADMIN', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(2, 'alfred', 'alfred@gmail.com', 'alfred321', 2147483647, 0, 'USER', '0000-00-00 00:00:00', '2023-01-06 16:38:53'),
(3, 'robert', 'robert@gmail.com', 'robert987', 1002458756, 1, 'USER', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(4, 'josena jera', 'josenajera@gmail.com', 'josenajera78', 1003654125, 1, 'USER', '2023-01-06 14:34:19', '2023-01-06 14:34:19'),
(6, 'pedro', 'pedro@gmail.com', 'pedro524', 1000235648, 1, 'USER', '2023-01-06 15:10:18', '2023-01-06 15:10:18'),
(7, 'migel', 'migel@gmail.com', 'migel524', 1047483612, 0, 'USER', '2023-01-06 15:11:11', '2023-01-06 16:37:14'),
(8, 'morris', 'morris@gmail.com', 'morris524', 100202456, 1, 'USER', '2023-01-06 15:37:30', '2023-01-06 15:37:30'),
(9, 'franco', 'franco@gmail.com', 'franco524', 100254584, 1, 'USER', '2023-01-06 15:37:58', '2023-01-06 15:37:58');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `almacenamientos`
--
ALTER TABLE `almacenamientos`
  ADD PRIMARY KEY (`idAlmacenamiento`);

--
-- Indices de la tabla `asignacions`
--
ALTER TABLE `asignacions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idUser` (`idUser`);

--
-- Indices de la tabla `bandwidth`
--
ALTER TABLE `bandwidth`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `compras`
--
ALTER TABLE `compras`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `detallecompra`
--
ALTER TABLE `detallecompra`
  ADD KEY `id_compra` (`id_compra`),
  ADD KEY `idMaquina` (`idMaquina`);

--
-- Indices de la tabla `maquinas`
--
ALTER TABLE `maquinas`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `panelsapps`
--
ALTER TABLE `panelsapps`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `redescomplemento`
--
ALTER TABLE `redescomplemento`
  ADD KEY `id_redPrivada` (`id_redPrivada`),
  ADD KEY `id_bandwidth` (`id_bandwidth`);

--
-- Indices de la tabla `redesprivadas`
--
ALTER TABLE `redesprivadas`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `regiones`
--
ALTER TABLE `regiones`
  ADD PRIMARY KEY (`idRegiones`);

--
-- Indices de la tabla `sistemaos`
--
ALTER TABLE `sistemaos`
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
  MODIFY `idAlmacenamiento` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `asignacions`
--
ALTER TABLE `asignacions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `bandwidth`
--
ALTER TABLE `bandwidth`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `compras`
--
ALTER TABLE `compras`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `maquinas`
--
ALTER TABLE `maquinas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `panelsapps`
--
ALTER TABLE `panelsapps`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=35;

--
-- AUTO_INCREMENT de la tabla `redesprivadas`
--
ALTER TABLE `redesprivadas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `regiones`
--
ALTER TABLE `regiones`
  MODIFY `idRegiones` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de la tabla `sistemaos`
--
ALTER TABLE `sistemaos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `asignacions`
--
ALTER TABLE `asignacions`
  ADD CONSTRAINT `asignacions_ibfk_1` FOREIGN KEY (`idUser`) REFERENCES `usuarios` (`id`);

--
-- Filtros para la tabla `detallecompra`
--
ALTER TABLE `detallecompra`
  ADD CONSTRAINT `detallecompra_ibfk_1` FOREIGN KEY (`id_compra`) REFERENCES `compras` (`id`),
  ADD CONSTRAINT `detallecompra_ibfk_2` FOREIGN KEY (`idMaquina`) REFERENCES `maquinas` (`id`);

--
-- Filtros para la tabla `redescomplemento`
--
ALTER TABLE `redescomplemento`
  ADD CONSTRAINT `redescomplemento_ibfk_1` FOREIGN KEY (`id_redPrivada`) REFERENCES `redesprivadas` (`id`),
  ADD CONSTRAINT `redescomplemento_ibfk_2` FOREIGN KEY (`id_bandwidth`) REFERENCES `bandwidth` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
