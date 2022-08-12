const parse = require('pg-connection-string').parse;
const config = parse(process.env.DATABASE_URL);
// strapi-api/config/database.js
module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'ec2-52-207-15-147.compute-1.amazonaws.com'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'd5360hs5la7ui'),
      user: env('DATABASE_USERNAME', 'fbjhxifjltliyc'),
      password: env('DATABASE_PASSWORD', '5542fd179be40b270d337a5d4c9e197847c0927d14ea8206601bdab29e3a00f4'),
      // schema: env('DATABASE_SCHEMA', 'public'), // Not required
      ssl: {
        rejectUnauthorized: false
      }
    },
    debug: false,
  },
});