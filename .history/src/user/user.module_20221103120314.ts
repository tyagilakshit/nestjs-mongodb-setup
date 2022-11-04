import { Module } from '@nestjs/common';
import { MongooseModule, Schema } from '@nestjs/mongoose/dist';
import { UserController } from './user.controller';
import { User, UserSchema } from './user.schema';
import { UserService } from './user.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User, schema: UserSchema }])
  ],
  controllers: [UserController],
  providers: [UserService]
})
export class UserModule { }
