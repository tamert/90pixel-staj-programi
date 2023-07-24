import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';
import { UsersService } from './users.service';
import { UsersController } from './user.controller';
import { UserSeeder } from './user.seeder';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [UsersService, UserSeeder],
  controllers: [UsersController],
})
export class UsersModule {}
