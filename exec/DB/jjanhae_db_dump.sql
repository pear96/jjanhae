-- MySQL Script generated by MySQL Workbench
-- Fri Feb 18 01:40:38 2022
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema jjanhae
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema jjanhae
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `jjanhae` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `jjanhae` ;

-- -----------------------------------------------------
-- Table `jjanhae`.`auth_email`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `jjanhae`.`auth_email` (
  `auth_seq` INT NOT NULL AUTO_INCREMENT,
  `email` VARCHAR(255) NOT NULL,
  `auth_code` VARCHAR(255) NOT NULL,
  `time_limit` VARCHAR(45) NULL DEFAULT 'n',
  PRIMARY KEY (`auth_seq`))
ENGINE = InnoDB
AUTO_INCREMENT = 88
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `jjanhae`.`user`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `jjanhae`.`user` (
  `user_seq` INT NOT NULL AUTO_INCREMENT,
  `user_id` VARCHAR(50) NOT NULL,
  `password` VARCHAR(300) NOT NULL,
  `name` VARCHAR(50) NOT NULL,
  `email` VARCHAR(100) NOT NULL,
  `birthday` DATE NOT NULL,
  `del_yn` VARCHAR(1) NOT NULL DEFAULT 'N',
  `image_url` VARCHAR(300) NOT NULL,
  `drink` VARCHAR(50) NULL DEFAULT NULL,
  `drink_limit` INT NULL DEFAULT NULL,
  `auth_yn` VARCHAR(1) NOT NULL DEFAULT 'Y',
  `auth_code` VARCHAR(100) NULL DEFAULT NULL,
  `provider` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`user_seq`))
ENGINE = InnoDB
AUTO_INCREMENT = 41
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `jjanhae`.`room`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `jjanhae`.`room` (
  `room_seq` INT NOT NULL AUTO_INCREMENT,
  `owner` INT NOT NULL,
  `type` INT NOT NULL,
  `password` VARCHAR(100) NULL DEFAULT NULL,
  `title` VARCHAR(50) NOT NULL,
  `description` VARCHAR(100) NOT NULL,
  `thumbnail_url` VARCHAR(300) NOT NULL,
  `drink_limit` INT NOT NULL,
  `del_yn` VARCHAR(1) NOT NULL DEFAULT 'N',
  `start_time` DATETIME NOT NULL,
  `end_time` DATETIME NULL DEFAULT NULL,
  `image_url` VARCHAR(100) NULL DEFAULT NULL,
  `play_yn` VARCHAR(1) NOT NULL DEFAULT 'N',
  PRIMARY KEY (`room_seq`),
  INDEX `room_owner_fk` (`owner` ASC) VISIBLE,
  CONSTRAINT `room_owner_fk`
    FOREIGN KEY (`owner`)
    REFERENCES `jjanhae`.`user` (`user_seq`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB
AUTO_INCREMENT = 359
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `jjanhae`.`relationship`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `jjanhae`.`relationship` (
  `relationship_seq` INT NOT NULL AUTO_INCREMENT,
  `user_seq` INT NOT NULL,
  `friend_seq` INT NOT NULL,
  `count` INT NULL DEFAULT NULL,
  `friend_yn` VARCHAR(1) NOT NULL DEFAULT 'N',
  PRIMARY KEY (`relationship_seq`),
  INDEX `relationship_user_seq_fk` (`user_seq` ASC) VISIBLE,
  INDEX `relationship_friend_seq_fk` (`friend_seq` ASC) VISIBLE,
  CONSTRAINT `relationship_friend_seq_fk`
    FOREIGN KEY (`friend_seq`)
    REFERENCES `jjanhae`.`user` (`user_seq`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `relationship_user_seq_fk`
    FOREIGN KEY (`user_seq`)
    REFERENCES `jjanhae`.`user` (`user_seq`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `jjanhae`.`room_history`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `jjanhae`.`room_history` (
  `history_seq` INT NOT NULL AUTO_INCREMENT,
  `user_seq` INT NOT NULL,
  `room_seq` INT NOT NULL,
  `action` VARCHAR(20) NOT NULL,
  `inserted_time` DATETIME NOT NULL,
  `updated_time` DATETIME NULL DEFAULT NULL,
  PRIMARY KEY (`history_seq`),
  INDEX `room_history_user_seq_fk` (`user_seq` ASC) VISIBLE,
  INDEX `room_history_room_seq_fk` (`room_seq` ASC) VISIBLE,
  CONSTRAINT `room_history_room_seq_fk`
    FOREIGN KEY (`room_seq`)
    REFERENCES `jjanhae`.`room` (`room_seq`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `room_history_user_seq_fk`
    FOREIGN KEY (`user_seq`)
    REFERENCES `jjanhae`.`user` (`user_seq`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB
AUTO_INCREMENT = 747
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;