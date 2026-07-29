CREATE TABLE usuarios (
    id_usuario SERIAL PRIMARY KEY,

    nombres_usuario VARCHAR(100) NOT NULL,
    apellidos_usuario VARCHAR(100) NOT NULL,

    email_usuario VARCHAR(150) UNIQUE NOT NULL,
    nombre_usuario VARCHAR(50) UNIQUE NOT NULL,

    contrasena VARCHAR(255) NOT NULL,

    rol VARCHAR(20) NOT NULL
        CHECK (rol IN ('Administrador', 'Profesor', 'Alumno')),

    activo BOOLEAN DEFAULT TRUE,

    fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);