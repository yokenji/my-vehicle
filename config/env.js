module.exports = {

  prod: {
    server: {
      port: 3000
    },
    db: {
      uri: "./db/dev.sqlite3",
      migrations: "./db/migrations",
      seeds: "./db/seeds"
    },
    jwt: {
      session: "2h",
      security_token: "tTcuitAHdXij3kLmjiLcaYRsrujtmRaRo7mN7k7r7u3UpgwLdg"
    }
  },

  dev: {
    server: {
      port: 3000,
    },
    db: {
      uri: "./db/dev.sqlite3",
      migrations: "./db/migrations",
      seeds: "./db/seeds"
    },
    jwt: {
      session: "2h",
      security_token: "tTcuitAHdXij3kLmjiLcaYRsrujtmRaRo7mN7k7r7u3UpgwLdg"
    }
  }
}