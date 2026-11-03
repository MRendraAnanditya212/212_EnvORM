require("dotenv").config();

const development = {
  username: process.env.DB_USER || "postgres",
  password: process.env.DB_PASSWORD || "postgres",
  database: process.env.DB_DATABASE || "db_komik",
  host: process.env.DB_HOST || "127.0.0.1",
  port: process.env.DB_PORT || 5432,
  dialect: process.env.DB_DIALECT || "postgres"
};

const production = {
  use_env_variable: "POSTGRES_URL",
  dialect: "postgres",
  dialectOptions: {
    ssl: {
      rejectUnauthorized: false
    }
  }
};

module.exports = { development, production };