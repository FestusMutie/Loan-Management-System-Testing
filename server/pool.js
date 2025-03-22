import pg from 'pg';

const connectDatabase = () => {
  return new pg.Pool({
    user: 'postgres',
    password: 'postgres',
    database: 'lending',
    host: 'localhost',
    port:5433,
  });
};

export { connectDatabase };
