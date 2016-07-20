require('dotenv').config();
module.exports = {
  development: {
    client: 'pg',
    connection: process.env.DATABASE_URL || 'postgres://localhost:5432/redditclone'
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
};
