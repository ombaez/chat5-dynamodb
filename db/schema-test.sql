-- MySQL Workbench Forward Engineering
CREATE DATABASE main_db;
USE main_db;

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema plataforma5
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Table `User`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `User` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `userName` VARCHAR(255) NULL,
  `email` VARCHAR(255) NOT NULL,
  `passwordEncrypted` VARCHAR(255) NULL,
  `firstName` VARCHAR(255) NULL,
  `lastName` VARCHAR(255) NULL,
  `createdAt` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `channelsId` TEXT,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;

LOCK TABLES `User` WRITE;
/*!40000 ALTER TABLE `User` DISABLE KEYS */;
INSERT INTO `User` (id,userName,email,passwordEncrypted,firstName,lastName,channelsId)
values
(1,'userName', 'user@mail.com', '$2a$10$y1YpEHpRV7FH9WE./JA5k.ZWNYiMmifrojBXuOtdNukcPxj2FRWYe', 'Juan', 'Sanchez', '[asdfqwererty,123456789]');

/*!40000 ALTER TABLE `User` ENABLE KEYS */;
UNLOCK TABLES;

-- -----------------------------------------------------
-- Table `Invoices`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Channels` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `cuit` VARCHAR(255) NOT NULL,
  `comment` VARCHAR(255) NULL,
  `date` DATETIME,
  `createdAt` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;

LOCK TABLES `Channels` WRITE;
/*!40000 ALTER TABLE `User` DISABLE KEYS */;
INSERT INTO `Channels` (id,cuit,comment,date,createdAt)
values
("asd1","334567897",'Comentario de ejemplo','2020-09-09');

/*!40000 ALTER TABLE `User` ENABLE KEYS */;
UNLOCK TABLES;

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

