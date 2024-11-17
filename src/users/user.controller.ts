import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';

import { User } from '@prisma/client';

import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getAll() {
    return this.userService.getAll();
  }

  @Post()
  create(@Body() user: User) {
    return this.userService.create(user);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.userService.delete(id);
  }
}
