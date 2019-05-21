// Update with your config settings.

module.exports = {
  development: {
    client: "sqlite3",
    connection: {
      filename: "./data-base/wander-lust.db3"
    },
    useNullAsDefault: true,
    migrations: {
      directory: "./data-base/migrations"
    },
    seeds: {
      directory: "./data-base/seeds"
    }
  },
  testing: {
    client: "sqlite3",
    connection: {
      filename: "./data-base/test.db3"
    },
    useNullAsDefault: true,
    migrations: {
      directory: "./data-base/migrations"
    },
    seeds: {
      directory: "./data-base/seeds"
    }
  },
  production: {
    client: "pg",
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: "./data-base/migrations"
    },
    seeds: {
      directory: "./data-base/seeds"
    }
  }
};
