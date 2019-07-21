if (process.env.NODE_ENV !== "production") {
  require("dotenv").config(); // 1) import не работает внутри условий 2) https://www.npmjs.com/package/dotenv#how-do-i-use-dotenv-with-import-
}

const secrets = {
  apiPort: process.env.API_PORT,
  dbUrl: process.env.DB_URL
};

export const getSecret = (key) => secrets[key];
