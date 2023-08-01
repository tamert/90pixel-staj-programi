import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import {User} from "./user/user.entity";
import {UserSeeder} from "./user/user.seeder";
import {UserModule} from "./user/user.module";
import {ConfigModule} from "@nestjs/config";


console.log( process.env);
@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true
    }),
    TypeOrmModule.forRoot({
      database: process.env.DATABASE_DBNAME,
      entities: [User],
      host: 'localhost',
      password: process.env.DATABASE_PASSWORD,
      port: Number(process.env.DATABASE_PORT),
      synchronize: true,
      type: 'mysql',
      username: process.env.DATABASE_USERNAME,
    }),
    TypeOrmModule.forFeature([User]),
    UserModule
  ],

  providers: [UserSeeder],
})
export class AppModule {}
