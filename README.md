# Entregable API Xarxatec Activa 2024

En este entregable se pretende demostrar lo aprendido sobre API, y una correcta arquitectura de código. Realizado en Xarxatec Activa, edición 2024.

## Crear la Base de Datos:

Para crear la base de datos que se emplea en el ejercicio deberemos realizar las siguientes instrucciones de en PSQL:

    CREATE TABLE "user" (
    id SERIAL PRIMARY KEY,
    user_name VARCHAR(20) UNIQUE NOT NULL,
    name VARCHAR(30) NOT NULL,
    first_surname VARCHAR(30) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL
    );

    CREATE TABLE "association_type" (
    id SERIAL PRIMARY KEY,
    type_name VARCHAR(50) UNIQUE NOT NULL
    );

    CREATE TABLE "association" (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    description TEXT NOT NULL,
    type_id INTEGER NOT NULL,
    location VARCHAR(50) NOT NULL,
    founded_date DATE,
    contact_email VARCHAR(255),
    CONSTRAINT fk_type FOREIGN KEY (type_id) REFERENCES "association_type" (id)
    );

    CREATE TABLE "user_association" (
    user_id INTEGER NOT NULL,
    association_id INTEGER NOT NULL,
    role VARCHAR(50),
    PRIMARY KEY (user_id, association_id),
    CONSTRAINT fk_user FOREIGN KEY (user_id) REFERENCES "user" (id),
    CONSTRAINT fk_association FOREIGN KEY (association_id) REFERENCES "association" (id)
    );
    
## Iniciar la app:

Para iniciar la aplicación necesitaremos tener instalado Node.js. Clonamos el repositorio y ejecutamos los siguientes comandos:

 1. Instalamos las dependencias.

    ```bash
    npm install
    ```

2. Ejecutamos la aplicación:

    ```bash
    npm start
    ```

Una vez ejecutados los comandos en la consola (en la raíz del repositorio), podemos seguir con las pruebas.

## Pruebas Postman:

1. Para las pruebas en postman, este es el enlace a las pruebas que he realizado:

    Postman: <https://www.postman.com/albiol/workspace/public/collection/39115000-baf74d72-f21b-4e45-b88d-116072b2ba10?action=share&creator=39115000>

2. Recomendaciones para las pruebas en Postman (en orden):

    - Crear un tipo de associación (ej. Comercios).
    - Crear una asociación.
    - Crear un usuario.

Despues de seguir los pasos anteriores en el orden mostrado, se pueden probar todos los endpoints.

## Cambios realizados en el codigo.

Los cambios mas relevantes realizados en el codigo para seguir unas buenas prácticas de codigo y una consistencia son los siguientes:

- Creación de clases para los modelos y controladores, facilitando el uso de las funciones y la distinción.

- Implementación de la interfaz "ProcessResult" para la comunicación al cliente. He modificado la interfaz "DeleteResult" para hacerla mas generica, y asi poder emplearla en cada una de las comunicaciones con la base de datos para facilitar la gestión de errores y la información al usuario.

- Ajuste de las consultas de SQL para evitar los atques de inserción de SQL y mejorar la seguridad de la aplicación.

- Creación de la entidad "Association" y "AssociationType", donde se gestionan asociaciones de gente y los diversos tipos de colectivos (clubs, asociaciones culturales, de comercios...)

- Realización de todos los endpoints importantes para estas nuevas entidades.

- Ajustes de estructura, designación, y control de los posibles errores.