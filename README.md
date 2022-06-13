# Api-Users
Api REST con Sequelize

Este tamplate esta hecho en Node con express, posee codigo relacionado al modulo de usuarios para que sirva como ejemplo para el control de errrores en las respuestas (estandarizado), y la forma en que se hacen las relaciones con el orm.
Librerias

    
    Sequelize: Orm de conexion a la base de datos
    bcrypt: Libreria para la encriptacion de las contraseñas
    jsonwebtoken: Libreria para la generacion de token ya sea de usuarios o urls.
    dotenv: Libreria para el manejo de las variables de entorno.
    nodemon: Libreria para el livereload en apoyo a la etapa de desarrollo.
    cors: Libreria para el manejo es cross origin resource sharing.
    jest: Libreria para la realizacion de pruebas.
    supertest: Libreria en apoyo a las pruebas para consultas http.
    mysql2: Libreria para conectarnos a una db de mysql.
    morgan: Libreria que registra las requests, útil durante la depuración.
    method-override: Libreria que nos permite hacer las actualizaciones en un método PUT.

# Ejecutar proyecto

Comenzamos

#instalar las dependencias
- npm install

#Corremos modo desarrollo

- npm run dev

#Correr las pruebas

- npm run test

Configuracion conexion a base de datos

Existe un archivo llamado config.json este posee la configuracion de conexion a nuestra base de datos, esta puede varias dependiendo del motor al que nos vamos a conectar, en nuestro caso es a mysql.
