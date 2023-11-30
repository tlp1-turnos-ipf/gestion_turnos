import "dotenv/config";

export const environments = {
  PORT: process.env.PORT || 3000,
  SECRET: process.env.SECRET || "mi_clave_secreta",
  DB: {
    DB_NAME: process.env.DB_NAME || "bd_centro_atencion",
    DB_HOST: process.env.DB_HOST || "localhost",
    DB_DIALECT: process.env.DB_DIALECT || "mysql",
    DB_USER: process.env.DB_USER || "root",
    DB_PASSWORD: process.env.DB_PASSWORD || "",
    DB_PORT: process.env.DB_PORT || 3306,
  },
};
