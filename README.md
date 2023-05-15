# Aplicación de ejemplo para usar Redis como caché y hash MD5

Este repositorio contiene una aplicación de ejemplo desarrollada en Node.js con el framework Fastify. El objetivo de esta aplicación es demostrar cómo utilizar Redis como una capa de caché para mejorar el rendimiento de las operaciones y cómo aplicar el hash MD5 para almacenar las claves en Redis de manera eficiente.

Revisar el servicio services/redis.service.js para entender como se genera el GET de caché y el SET del mismo, este servicio se consume desde middlewares/cache.middleware.js.

## Requisitos
Asegúrate de tener los siguientes requisitos instalados en tu sistema:

- Node.js (versión >= 12)
- Docker
- Docker Compose

## Instalación
Clona este repositorio en tu máquina local:
```bash
git clone https://github.com/taaddde/api-with-cache.git
```

Accede al directorio del proyecto:
```bash
cd api-with-cache
```

Instala las dependencias utilizando npm:
```bash
npm install
```

## Configuración
La configuración de la aplicación se encuentra en el archivo config.js. Aquí puedes ajustar los siguientes parámetros:

PORT: Puerto en el que se ejecutará el servidor Fastify.
HOST: Configuración de conexión a Redis.

## Ejecución
Para ejecutar la aplicación, sigue los siguientes pasos:

- Inicia el contenedor de Redis utilizando Docker Compose:
```bash
docker-compose up -d
```
- Inicia la aplicación:
```bash
npm start
```
- El servidor Fastify se ejecutará en el puerto especificado en la configuración.

Uso
La aplicación tiene dos rutas:

GET / - Es el endpoint health, devuelve 200 con un mensaje OK
GET /current/:city - Recibe como parámetro el nombre de una ciudad

Puedes probar estas rutas utilizando una herramienta como cURL, Postman o ThunderClient.

## Contribución
Si deseas contribuir a este proyecto, ¡eres bienvenido! Puedes abrir un problema para informar sobre errores o enviar una solicitud de extracción con mejoras y correcciones.
