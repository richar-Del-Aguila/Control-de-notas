create table admin(
	id_admin serial primary key,
	id_usuario integer unique not null,
	constraint fk_user_admin
		foreign key (id_usuario) references usuarios(id_usuario)
);

create table profesores(
	id_profesor serial primary key,
	id_usuario integer unique not null,
	constraint fk_user_profesor
		foreign key (id_usuario) references usuarios(id_usuario)
);

create table estudiantes(
	id_alumno serial primary key,
	id_usuario integer unique not null,
	constraint fk_user_alumno
		foreign key (id_usuario) references usuarios(id_usuario)
);