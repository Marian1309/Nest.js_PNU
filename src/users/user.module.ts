import { Module } from '@nestjs/common';

import { DatabaseService } from '@/database/database.service';

import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
  providers: [DatabaseService, UserService],
  controllers: [UserController]
})
export class UserModule {}
