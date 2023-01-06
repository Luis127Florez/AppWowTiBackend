-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 06-01-2023 a las 17:52:13
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
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL,
  `nombre` varchar(100) COLLATE utf8mb4_spanish2_ci NOT NULL,
  `email` varchar(100) COLLATE utf8mb4_spanish2_ci NOT NULL,
  `contraseña` varchar(200) COLLATE utf8mb4_spanish2_ci NOT NULL,
  `N_identificacion` int(20) NOT NULL,
  `estado` tinyint(4) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish2_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `nombre`, `email`, `contraseña`, `N_identificacion`, `estado`, `createdAt`, `updatedAt`) VALUES
(1, 'Luis florez', 'florezgilluisantony@gmail.com', 'luis123', 1002028561, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(2, 'alfred', 'alfred@gmail.com', 'alfred321', 2147483647, 0, '0000-00-00 00:00:00', '2023-01-06 16:38:53'),
(3, 'robert', 'robert@gmail.com', 'robert987', 1002458756, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(4, 'josena jera', 'josenajera@gmail.com', 'josenajera78', 1003654125, 1, '2023-01-06 14:34:19', '2023-01-06 14:34:19'),
(6, 'pedro', 'pedro@gmail.com', 'pedro524', 1000235648, 1, '2023-01-06 15:10:18', '2023-01-06 15:10:18'),
(7, 'migel', 'migel@gmail.com', 'migel524', 1047483612, 0, '2023-01-06 15:11:11', '2023-01-06 16:37:14'),
(8, 'morris', 'morris@gmail.com', 'morris524', 100202456, 1, '2023-01-06 15:37:30', '2023-01-06 15:37:30'),
(9, 'franco', 'franco@gmail.com', 'franco524', 100254584, 1, '2023-01-06 15:37:58', '2023-01-06 15:37:58');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
