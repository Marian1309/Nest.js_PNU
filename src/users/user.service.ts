import { Injectable } from '@nestjs/common';

import { v4 as uuidv4 } from 'uuid';

import { User } from '@prisma/client';

import { DatabaseService } from '@/database/database.service';

@Injectable()
export class UserService {
  constructor(private databaseService: DatabaseService) {}

  async getAll(): Promise<User[]> {
    const users = await this.databaseService.user.findMany();

    return users;
  }
  async create(user: User): Promise<{ message: string }> {
    const createdUser = await this.databaseService.user.create({
      data: {
        ...user,
        id: uuidv4()
      }
    });

    return {
      message: `User ${createdUser.name} created`
    };
  }

  async delete(userId: string): Promise<{ message: string }> {
    const deletedUser = await this.databaseService.user.delete({
      where: { id: userId }
    });

    return {
      message: `User with ID ${deletedUser.id} deleted`
    };
  }
}
