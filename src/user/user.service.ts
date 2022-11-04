import { Injectable } from '@nestjs/common';
import { User, UserDocument } from './user.schema';
import { InjectModel } from "@nestjs/mongoose";
import { Model, ObjectId } from "mongoose";
@Injectable()
export class UserService {
    constructor(
        @InjectModel(User.name) private userModel: Model<UserDocument>
    ) { }

    async FindAll(): Promise<User[]> {
        return this.userModel.find();
    }

    async FindOne(userId: string | ObjectId): Promise<User> {
        return this.userModel.findById(userId)
    }

    async createUser(input): Promise<User> {
        return this.userModel.create(input);
    }
}
