class Sockets {
  //Recibo el socketio o io para que todos queden bajo la misma conexion
  constructor(io) {
    this.io = io;
    //Se llama el evento al inicial la clase para mandar el mensaje
    this.socketsEvents();
  }

  socketsEvents() {
    //Conexion
    this.io.on("connection", (socket) => {
      //Escuchar evento: mensaje-to-server
      socket.on("mensaje-to-server", (data) => {
        console.log(data);
        this.io.emit("mensaje-from-server", data);
      });
    });
  }
}

module.exports = Sockets;
