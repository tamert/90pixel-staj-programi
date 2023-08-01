import {NestFactory} from '@nestjs/core';
import {AppModule} from './app.module';
import {TypeOrmModule} from '@nestjs/typeorm';
import {UserSeeder} from "./user/user.seeder";

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    await TypeOrmModule.forRoot({
        database: process.env.DATABASE_DBNAME,
        host: 'localhost',
        password: process.env.DATABASE_PASSWORD,
        port: Number(process.env.DATABASE_PORT),
        synchronize: true,
        type: 'mysql',
        username: process.env.DATABASE_USERNAME,
        entities: [__dirname + '/**/*.entity{.ts,.js}'],
        logging: true,
    });

    const userSeeder = app.get(UserSeeder);
    await userSeeder.seed();

    await app.listen(3333);
}

bootstrap();
