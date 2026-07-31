create table actividades(
	id_actividad serial primary key,
	nombre_actividad varchar(100) not null,
	tipo_actividad varchar(50) not null,
	nota_maxima decimal(4,1) not null,
	id_asignacion integer not null,

	check (nota_maxima > 0),
	
	constraint fk_actividad_asignacion
		foreign key (id_asignacion)
		references asignaciones(id_asignacion),
		
	constraint unique_actividades
		unique(nombre_actividad, id_asignacion)
);

create table calificaciones(
	id_calificacion serial primary key,
	id_actividad integer not null,
	nota_obtenida decimal(4,1) not null,
	id_inscripcion integer not null,
	
	check (nota_obtenida >= 0),
	
	constraint fk_calificacion_actividad
		foreign key (id_actividad)
		references actividades(id_actividad),
		
	constraint fk_calificacion_inscripcion
		foreign key (id_inscripcion)
		references inscripciones(id_inscripcion),
		
	constraint unique_calificaciones
		unique(id_actividad, id_inscripcion)
);