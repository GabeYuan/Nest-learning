import { DataSource } from 'typeorm';
// https://wanago.io/2022/07/25/api-nestjs-database-migrations-typeorm/
// npx typeorm-ts-node-esm migration:run -d .\typeOrm.config.ts
import { CoffeeRefactor1677218621384 } from './src/migrations/1677218621384-CoffeeRefactor';
export default new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'pass123',
  database: 'postgres',
  entities: ['dist/**/*.entity.js'],
  // migrations: ['dist/migrations/*.js'],
  migrations: [CoffeeRefactor1677218621384],
});
