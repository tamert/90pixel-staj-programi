import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import {User} from "./user/user.entity";
import {UserSeeder} from "./user/user.seeder";
import {UserModule} from "./user/user.module";



@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 8889,
      username: 'root',
      password: 'root',
      database: 'calisma',
      entities: [User],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([User]),
    UserModule,
  ],
  providers: [UserSeeder],
})
export class AppModule {}
