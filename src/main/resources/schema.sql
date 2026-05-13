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
