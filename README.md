# Timestamp Microservice

Este es un simple microservicio construido con Node.js y Express que permite obtener el timestamp en formato Unix y UTC para una fecha dada.

## Requisitos

- Node.js (v20.8.0 o superior)
- npm (gestor de paquetes de Node.js)

## Instalación

1. Clona el repositorio (si aún no lo has hecho).
2. Navega al directorio del proyecto.
3. Instala las dependencias con `npm install`.

## Uso

Para iniciar el microservicio, ejecuta:

```bash
npm start
```

Puedes cambiar el puerto definiendo la variable de entorno `PORT`.


Una vez iniciado, puedes probar el microservicio accediendo a las siguientes rutas:

- Fecha actual: [http://localhost:3000/api/](http://localhost:3000/api/)
- Con una fecha específica: [http://localhost:3000/api/2023-12-21](http://localhost:3000/api/2023-12-21)

Reemplaza `2023-12-21` con cualquier fecha en formato YYYY-MM-DD para obtener el timestamp correspondiente.

### Pruebas

Para ejecutar las pruebas automatizadas, usa:

```bash
npm test
```

### Docker

También puedes construir una imagen Docker:

```bash
docker build -t timestamp-service .
docker run -p 3000:3000 timestamp-service
```
