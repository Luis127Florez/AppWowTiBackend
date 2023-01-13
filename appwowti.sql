-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
<<<<<<< HEAD
<<<<<<< HEAD
-- Tiempo de generación: 12-01-2023 a las 21:17:14
=======
-- Tiempo de generación: 12-01-2023 a las 22:46:29
>>>>>>> dev
=======
-- Tiempo de generación: 13-01-2023 a las 15:26:55
>>>>>>> dev
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
-- Estructura de tabla para la tabla `backupspace`
--

CREATE TABLE `backupspace` (
  `tamaño` int(11) NOT NULL,
  `tipo` varchar(20) COLLATE utf8mb4_spanish2_ci NOT NULL,
  `descripcion` varchar(50) COLLATE utf8mb4_spanish2_ci NOT NULL,
  `precio` float NOT NULL,
  `id` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish2_ci;

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
  `SSL` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish2_ci;

--
-- Volcado de datos para la tabla `complementos`
--

INSERT INTO `complementos` (`id`, `ObjectStorage`, `BackupSpace`, `ServerManagement`, `Monitoring`, `SSL`) VALUES
(1, 1, 1, 1, 1, 1);

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
-- Estructura de tabla para la tabla `ipv4`
--

CREATE TABLE `ipv4` (
  `id` int(11) NOT NULL,
  `cantidad` int(11) NOT NULL,
  `precio` float NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish2_ci;

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
  `complementos` int(11) NOT NULL,
  `duracionPlazo` varchar(250) COLLATE utf8mb4_spanish2_ci NOT NULL,
  `precio` float NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish2_ci;

--
-- Volcado de datos para la tabla `maquinas`
--

INSERT INTO `maquinas` (`id`, `descripcion`, `region`, `almacenamiento`, `sistemaOperativo`, `redes`, `complementos`, `duracionPlazo`, `precio`, `createdAt`, `updatedAt`) VALUES
(1, 'Cloud VPS S', 'European Union (Germany)', '{tamaño: 200 , tipo:\"GB\" , disco:\"SSD\"}', 'Windows Server', '{PrivateNetworking:\"No Private Networking\",Bandwidth:\"32 tv out\", IPv4:\"1 Ip address\"}', 1, '1 mes', 18.38, '2023-01-12 21:49:20', '2023-01-12 21:49:20'),
(2, 'Cloud VPS S', 'United States (West)', '{tamaño: 400 , tipo:\"GB\" , disco:\"SSD\"}', 'ubuntu 4.0', '{PrivateNetworking:\"No Private Networking\",Bandwidth:\"32 tv out\", IPv4:\"1 Ip address\"}', 1, '1 mes', 27.16, '2023-01-12 21:49:20', '2023-01-12 21:49:20');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `monitoring`
--

CREATE TABLE `monitoring` (
  `id` int(11) NOT NULL,
  `tipo` varchar(50) COLLATE utf8mb4_spanish2_ci NOT NULL,
  `precio` float NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish2_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `objectstorage`
--

CREATE TABLE `objectstorage` (
  `tamaño` int(11) NOT NULL,
  `tipo` varchar(50) COLLATE utf8mb4_spanish2_ci NOT NULL,
  `descripcion` varchar(100) COLLATE utf8mb4_spanish2_ci NOT NULL,
  `precio` float NOT NULL,
  `id` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish2_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `servermanagement`
--

CREATE TABLE `servermanagement` (
  `tipo` varchar(50) COLLATE utf8mb4_spanish2_ci NOT NULL,
  `precio` float NOT NULL,
  `id` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish2_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `sll`
--

CREATE TABLE `sll` (
  `id` int(11) NOT NULL,
  `tipo` varchar(50) COLLATE utf8mb4_spanish2_ci NOT NULL,
  `precio` float NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish2_ci;

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
-- Indices de la tabla `asignacions`
--
ALTER TABLE `asignacions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idUser` (`idUser`);

--
-- Indices de la tabla `backupspace`
--
ALTER TABLE `backupspace`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `complementos`
--
ALTER TABLE `complementos`
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
-- Indices de la tabla `ipv4`
--
ALTER TABLE `ipv4`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `maquinas`
--
ALTER TABLE `maquinas`
  ADD PRIMARY KEY (`id`),
  ADD KEY `complementos` (`complementos`);

--
-- Indices de la tabla `monitoring`
--
ALTER TABLE `monitoring`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `objectstorage`
--
ALTER TABLE `objectstorage`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `servermanagement`
--
ALTER TABLE `servermanagement`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `sll`
--
ALTER TABLE `sll`
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
-- AUTO_INCREMENT de la tabla `asignacions`
--
ALTER TABLE `asignacions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `backupspace`
--
ALTER TABLE `backupspace`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `complementos`
--
ALTER TABLE `complementos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `compras`
--
ALTER TABLE `compras`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `ipv4`
--
ALTER TABLE `ipv4`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `maquinas`
--
ALTER TABLE `maquinas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `monitoring`
--
ALTER TABLE `monitoring`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `objectstorage`
--
ALTER TABLE `objectstorage`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `servermanagement`
--
ALTER TABLE `servermanagement`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `sll`
--
ALTER TABLE `sll`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

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
-- Filtros para la tabla `maquinas`
--
ALTER TABLE `maquinas`
  ADD CONSTRAINT `maquinas_ibfk_1` FOREIGN KEY (`complementos`) REFERENCES `complementos` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
