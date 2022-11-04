import { Injectable } from '@nestjs/common';
import { UserSchema, UserDocument } from './user.schema';
@Injectable()
export class UserService {
    constructor(
        @InjectModel(User.name) private userModel: Model<UserDocument>
    ) { }
}
