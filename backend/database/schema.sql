-- =============================================================================
-- Ciapara — Schema inicial
-- Ejecutar manualmente en phpMyAdmin o desde la terminal de MySQL:
--
--   mysql -u root -p ciapara < database/schema.sql
--
-- Requisito previo: la base de datos debe existir.
--   CREATE DATABASE IF NOT EXISTS ciapara CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
-- =============================================================================

USE ciapara;

-- -----------------------------------------------------------------------------
-- Tabla: contacts
-- Almacena los mensajes enviados desde el formulario de contacto.
-- -----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS contacts (
  id          INT           AUTO_INCREMENT PRIMARY KEY,
  name        VARCHAR(255)  NOT NULL,
  email       VARCHAR(255)  NOT NULL,
  phone       VARCHAR(50)   DEFAULT NULL,
  message     TEXT          NOT NULL,
  created_at  TIMESTAMP     DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
