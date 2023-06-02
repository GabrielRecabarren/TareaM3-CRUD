import { IUserDocument } from '@root/features/user/interfaces/IUserDocument.interface';
import { UserModel } from '@root/features/user/models/user.schema';
class UserService {
  public async addUserData(data: IUserDocument): Promise<void> {
    await UserModel.create(data);
  }
}
export const userService: UserService = new UserService();
