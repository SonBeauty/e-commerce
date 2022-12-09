// eslint-disable-next-line import/no-anonymous-default-export
export default ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', '127.0.0.1'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'e-commerce'),
      user: env('DATABASE_USERNAME', 'postgres'),
      password: env('DATABASE_PASSWORD', '0000'),
      ssl: env.bool('DATABASE_SSL', false),
    },
  },
});
