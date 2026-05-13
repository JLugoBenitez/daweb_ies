-- 1. Limpiamos el esquema
DROP TABLE IF EXISTS Matricula CASCADE;
DROP TABLE IF EXISTS Asignatura CASCADE;
DROP TABLE IF EXISTS Profesor CASCADE;
DROP TABLE IF EXISTS Alumno CASCADE;

-- 2. Creamos las tablas
CREATE TABLE Alumno
(
    id        int primary key,
    nombre    varchar(200),
    apellidos varchar(200),
    ipasen    varchar(50)
);

CREATE TABLE Profesor
(
    id           int primary key,
    nombre       varchar(200),
    apellidos    varchar(200),
    especialidad VARCHAR(200)
);

CREATE TABLE Asignatura
(
    id      int primary key,
    nombre  varchar(200),
    horas   int,
    imparte int,
    constraint fk_asig_prof foreign key (imparte) references Profesor (id)
);

CREATE TABLE Matricula
(
    id_mat     SERIAL primary key,
    id_alum    int,
    id_asig    int,
    curso      int,
    nota_media decimal(16, 2),
    constraint fk_mat_alum foreign key (id_alum) references Alumno (id),
    constraint fk_mat_asig foreign key (id_asig) references Asignatura (id)
);

-- 3. Insertamos los datos
INSERT INTO Profesor (id, nombre, apellidos, especialidad)
VALUES (1, 'José Antonio', 'Martínez López', 'Bases de Datos'),
       (2, 'María del Carmen', 'Ruiz Sánchez', 'Programación'),
       (3, 'Francisco', 'López García', 'Sistemas Informáticos'),
       (4, 'Laura', 'Sánchez Moreno', 'Entornos de Desarrollo'),
       (5, 'Miguel Ángel', 'Torres Navarro', 'Lenguajes de Marcas');

INSERT INTO Alumno (id, nombre, apellidos, ipasen)
VALUES (1, 'Antonio', 'García Ruiz', 'ALU001'),
       (2, 'María', 'López Sánchez', 'ALU002'),
       (3, 'Juan', 'Pérez Martín', 'ALU003'),
       (4, 'Lucía', 'Fernández Ortega', 'ALU004'),
       (5, 'David', 'Romero Castro', 'ALU005'),
       (6, 'Carmen', 'Navarro Díaz', 'ALU006'),
       (7, 'Javier', 'Morales Vega', 'ALU007'),
       (8, 'Paula', 'Jiménez Ruiz', 'ALU008'),
       (9, 'Sergio', 'Torres Molina', 'ALU009'),
       (10, 'Ana', 'Castillo Moreno', 'ALU010'),
       (11, 'Pablo', 'Herrera León', 'ALU011'),
       (12, 'Laura', 'Domínguez Ríos', 'ALU012'),
       (13, 'Daniel', 'Ruiz Blanco', 'ALU013'),
       (14, 'Marta', 'Gómez Serrano', 'ALU014'),
       (15, 'Adrián', 'Sánchez Vega', 'ALU015'),
       (16, 'Sara', 'Molina Torres', 'ALU016'),
       (17, 'Diego', 'Vargas Ruiz', 'ALU017'),
       (18, 'Elena', 'Martín Castro', 'ALU018'),
       (19, 'Hugo', 'Fernández Ramos', 'ALU019'),
       (20, 'Inés', 'Romero Navarro', 'ALU020');

INSERT INTO Asignatura (id, nombre, horas, imparte)
VALUES (1, 'Bases de Datos', 160, 1),
       (2, 'Programación', 240, 2),
       (3, 'Sistemas Informáticos', 200, 3),
       (4, 'Entornos de Desarrollo', 120, 4),
       (5, 'Lenguajes de Marcas', 100, 5);

INSERT INTO Matricula (id_alum, id_asig, curso, nota_media)
VALUES (1, 1, 2025, 7.50),
       (1, 2, 2025, 8.00),
       (2, 1, 2025, 6.25),
       (2, 3, 2025, 7.80),
       (3, 2, 2025, 5.50),
       (3, 5, 2025, 6.75),
       (4, 1, 2025, 9.00),
       (4, 4, 2025, 8.25),
       (5, 3, 2025, 7.10),
       (5, 2, 2025, 6.40),
       (6, 1, 2025, 5.90),
       (7, 5, 2025, 7.30),
       (8, 2, 2025, 8.90),
       (9, 3, 2025, 6.60),
       (10, 4, 2025, 7.70),
       (11, 1, 2025, 8.10),
       (12, 2, 2025, 6.80),
       (13, 3, 2025, 7.90),
       (14, 4, 2025, 5.60),
       (15, 5, 2025, 8.30);