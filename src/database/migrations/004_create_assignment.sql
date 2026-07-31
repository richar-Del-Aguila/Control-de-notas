CREATE TABLE asignaciones (
    id_asignacion SERIAL PRIMARY KEY,
    id_profesor INTEGER NOT NULL,
    id_grado INTEGER NOT NULL,
    id_materia INTEGER NOT NULL,
    id_ciclo INTEGER NOT NULL,

    CONSTRAINT fk_asignacion_profesor
        FOREIGN KEY (id_profesor)
        REFERENCES profesores(id_profesor),

    CONSTRAINT fk_asignacion_grado
        FOREIGN KEY (id_grado)
        REFERENCES grados(id_grado),

    CONSTRAINT fk_asignacion_materia
        FOREIGN KEY (id_materia)
        REFERENCES materias(id_materia),

    CONSTRAINT fk_asignacion_ciclo
        FOREIGN KEY (id_ciclo)
        REFERENCES ciclos_escolares(id_ciclo),

    CONSTRAINT uq_asignacion
        UNIQUE (id_profesor, id_grado, id_materia, id_ciclo)
);