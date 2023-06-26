//Servidor de express
const express = require("express");
//Servidor de socket
const http = require("http");
//Configuracion del socket server
const socketio = require("socket.io");
//Libreria para navegar entre directorios por path
const path = require("path");
const Sockets = require("./socket");
const cors = require("cors");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;

    //Se inicializa el http server
    this.server = http.createServer(this.app);

    //Configuracion del socket server
    this.io = socketio(this.server);
  }

  middlewares() {
    //Desplegar el directorio publico, se crea un front basico en html
    //Se utiliza path para resolver la ruta actual con la que quiero llegar o sea public y asi darme la ruta resultado
    this.app.use(express.static(path.resolve(__dirname, "../public")));

    //Se utiliza cors para restringir el acceso desde otras fuentes externas
    //Es necesario para usar soket.io
    this.app.use(cors());
  }

  configurarSockets() {
    //Se llama la clase Socket donde se hace todo el proceso de configuracion del socket
    new Sockets(this.io);
  }

  execute() {
    //Inicializar middlewares
    this.middlewares();
    //Inicializar los sockets
    this.configurarSockets();
    //Iniciar el server
    this.server.listen(this.port, () => {
      console.log(`Server corriendo en el puerto: ${this.port}`);
    });
  }
}

module.exports = Server;
