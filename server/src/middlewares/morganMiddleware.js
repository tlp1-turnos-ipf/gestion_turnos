import morgan from "morgan";
import { existsSync, createWriteStream, mkdirSync} from "fs";
import { join, resolve } from "path";

const LOGS = resolve("./src/log/");

//Verifico la existencia del directorio
if (!existsSync(LOGS)) {
  mkdirSync(LOGS);
}

export const morganLogs = morgan("combined", {
  stream: createWriteStream(join(LOGS, "./access.log"), {
    flags: "a",
  }),
});

