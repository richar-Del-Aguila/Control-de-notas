CREATE TABLE materias (
    id_materia SERIAL PRIMARY KEY,
    nombre_materia VARCHAR(150) UNIQUE NOT NULL
);

CREATE TABLE grados (
    id_grado SERIAL PRIMARY KEY,
    nombre_grado VARCHAR(150) NOT NULL,
    seccion_grado VARCHAR(3) NOT NULL,

    CONSTRAINT uq_grado_seccion
        UNIQUE (nombre_grado, seccion_grado)
);

CREATE TABLE ciclos_escolares (
    id_ciclo SERIAL PRIMARY KEY,
    nombre_ciclo VARCHAR(20) UNIQUE NOT NULL
);

