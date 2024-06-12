import { DataSource } from 'typeorm';
import * as dotenv from 'dotenv';
import { User } from './entities/user.entity';

dotenv.config();

const appDataSource = new DataSource({
  type: 'postgres', // Change to 'postgres'
  host: process.env.DB_HOST,
  port: 5432,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: [User], // Specify entities explicitly
  synchronize: true,
});

export default appDataSource;
