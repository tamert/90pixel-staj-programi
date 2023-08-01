import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import {UserSeeder} from "./user/user.seeder";


async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  await TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'root',
    database: 'calisma',
    entities: [__dirname + '/**/*.entity{.ts,.js}'],
    synchronize: true,
    logging: true,
  });

  const userSeeder = app.get(UserSeeder);
  await userSeeder.seed();

  await app.listen(3333);
}
bootstrap();
