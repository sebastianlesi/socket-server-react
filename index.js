// //Servidor de express
// const express = require("express");
// const app = express();
// //Servidor de socket
// const server = require("http").createServer(app);
// //Configuracion del socket server
// const io = require("socket.io")(server);
// //Desplegar el directorio publico, se crea un front basico en html
// app.use(express.static(__dirname + "/public"));

//Conexion
// io.on("connection", (socket) => {
  //El metodo emit manda el mensaje ya se ejecute desde el front o back y tiene dos parametros
  //Uno el nombre del mensaje y el segundo lo que se quiera enviar ya sea un objeto, boolean o otro
  //   socket.emit("mensaje-bienvenida", {
  //     msg: "Bienvenido al server",
  //     fecha: new Date(),
  //   });
  //El metodo on se encarga de escuchar el evento que envia el emit ya sea desde el front o back
  //Se identifica que mensaje es por el nomre que se manda en el primer parametro y los datos en el segundo
  //   socket.on("mensaje-cliente", (data) => {
  //     console.log(data);
  //   });

//   socket.on("mensaje-to-server", (data) => {
//     console.log(data);
//     //Si se usa socket solo se emite o escucha con el usuario que mando el id especifico
//     //Si se usa io (o como se nombre la instancia de socket.io) se emite o escucha para todos los usuarios conectados
//     io.emit("mensaje-from-server", data);
//   });
// });

// server.listen(8080, () => {
//   console.log("Esta corriendo");
// });

//La diferencia dentre nodemon y node es que nodemon hace un hot reload como react mientras que node no recarga automaticamente

//Se movio toda la logica a clases en el archivo server.js para mayor organizacion
const Server = require("./models/server");
//Se llama dotenv para poder utilizar las variables de entorno
require("dotenv").config();

const server = new Server();

server.execute();