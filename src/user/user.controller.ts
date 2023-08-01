import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  NotFoundException,
} from '@nestjs/common';

import { UserService } from './user.service';
import { User } from './user.entity';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UserService) {}

  @Get()
  async findAll(): Promise<User[]> {
    const data = await this.usersService.findAll();
    return data ? data : []
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<User | null> {
    const user = await this.usersService.findOne(id);
    if (!user) {
      throw new NotFoundException('User not found');
    }
    return user;
  }

  @Post()
  async create(@Body() userData: Partial<User>): Promise<User> {
    return this.usersService.create(userData);
  }

  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() userData: Partial<User>,
  ): Promise<User | null> {
    const user = await this.usersService.update(id, userData);
    if (!user) {
      throw new NotFoundException('User not found');
    }
    return user;
  }

  @Delete(':id')
  async remove(@Param('id') id: number): Promise<{ success: boolean }> {
    const isDeleted = await this.usersService.remove(id);
    if (!isDeleted) {
      throw new NotFoundException('User not found');
    }
    return { success: true };
  }
}
