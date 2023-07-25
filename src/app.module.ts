import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';
import { UsersModule } from './users.module';
import { UserSeeder } from './user.seeder';
import { UsersController } from './user.controller';
import { UsersService } from './users.service';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'calisma',
      entities: [User],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([User]),
    UsersModule,
  ],
  controllers: [UsersController],
  providers: [UserSeeder, UsersService],
})
export class AppModule {}
