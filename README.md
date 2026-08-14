# Control-de-notas

Sistema para el control de notas de un colegio.

Este proyecto se está desarrollando para practicar tecnologías web con Node.js, Express y PostgreSQL.

## Requisitos

- Node.js 16 o superior
- PostgreSQL
- npm

## Instalación

1. Clona el repositorio y cambia al directorio del proyecto:

   ```bash
   git clone <url-del-repositorio>
   cd Control-de-notas
   ```

2. Instala las dependencias:

   ```bash
   npm install
   ```

3. Crea un archivo `.env` a partir de `.env.example` y ajusta los valores de conexión a tu base de datos PostgreSQL:

   ```bash
   cp .env.example .env
   ```

4. Crea la base de datos y la tabla `usuarios` en PostgreSQL. Por ejemplo:

   ```sql
   CREATE DATABASE control_notas;
   \c control_notas
   CREATE TABLE usuarios (
     id SERIAL PRIMARY KEY,
     nombre TEXT,
     email TEXT
   );
   ```

5. Si lo deseas, inserta algunos registros de prueba en la tabla `usuarios` para verificar que el proyecto puede leer datos.

## Ejecución

Ejecuta la aplicación con:

```bash
npm start
```

La aplicación iniciará un servidor en `http://localhost:3000` y, además, intentará obtener los registros de la tabla `usuarios` al iniciar.

## Archivos importantes

- `src/app.js`: punto de entrada de la aplicación.
- `src/config/database.js`: configuración de conexión a PostgreSQL.
- `.env.example`: ejemplo de variables de entorno.


