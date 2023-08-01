import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import {UserModule} from "./user/user.module";
import {ConfigModule} from "@nestjs/config";

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true
    }),
    TypeOrmModule.forRoot({
      database: process.env.DATABASE_DBNAME,
      host: 'localhost',
      password: process.env.DATABASE_PASSWORD,
      port: Number(process.env.DATABASE_PORT),
      synchronize: true,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      type: 'mysql',
      username: process.env.DATABASE_USERNAME,
    }),
    UserModule
  ],
})
export class AppModule {}
