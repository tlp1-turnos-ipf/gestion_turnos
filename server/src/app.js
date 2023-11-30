import express from "express";
import cors from "cors";
import helmet from "helmet";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
//Socket
import { createServer } from "http";
import { Server as SocketServer } from "socket.io";

const app = express();

const httpServer = createServer(app);
const io = new SocketServer(httpServer);

// Archivos estáticos utilizando la librería path que viene en NodeJS

//obtener el directorio actual.
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
app.use(express.static(join(__dirname, "public")));

//Importaciones
import { morganLogs } from "./middlewares/morganMiddleware.js";
import { startDB } from "./config/database.js";
import { environments } from "./config/environments.js";
import { router } from "./routes/routes.js";
import { usuarioConectado } from "./controllers/sockets.controllers.js";
import { validarJWTWebsocket } from "./middlewares/validar-jwt.js";

//Middlewares
app.use(express.json());
app.use(cors());
app.use(morganLogs);
app.use(helmet());

//Route
app.use(router);

// Websocket events
io.on("connection", async (socket) => {
  const [isValid, user] = validarJWTWebsocket(
    socket.handshake.query["authorization"]
  );

  if (!isValid) {
    socket.disconnect();
    return console.log("Usuario no identificado", user);
  }

  const infoUser = await usuarioConectado(user);

  // Agregar el usuario conectado a la lista de usuarios
  console.log("Usuario conectado", infoUser.nombre_usuario);
  io.emit("usuario-conectado", user);
});

httpServer.listen(environments.PORT, async () => {
  console.log(`server on port ${environments.PORT}`);
  startDB();
});
