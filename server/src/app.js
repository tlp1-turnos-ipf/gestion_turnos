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

//Middlewares
app.use(express.json());
app.use(cors());
app.use(morganLogs);
app.use(helmet());

//Route
app.use(router);

httpServer.listen(environments.PORT, async () => {
  console.log(`server on port ${environments.PORT}`);
  startDB();
});
