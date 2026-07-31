create table inscripciones(
	id_inscripcion serial primary key,
	id_estudiante integer not null,
	id_grado integer not null,
	id_ciclo integer not null,
	estado BOOLEAN not null default true,
	
	CONSTRAINT uq_estudiante_ciclo
    	UNIQUE (id_estudiante, id_ciclo),
	
	CONSTRAINT fk_inscripcion_grado
        FOREIGN KEY (id_grado)
        REFERENCES grados(id_grado),
        
    CONSTRAINT fk_inscripcion_ciclo
        FOREIGN KEY (id_ciclo)
        REFERENCES ciclos_escolares(id_ciclo), 
	
    CONSTRAINT fk_inscripcion_estudiante
        FOREIGN KEY (id_estudiante)
        REFERENCES estudiantes(id_alumno)
);
