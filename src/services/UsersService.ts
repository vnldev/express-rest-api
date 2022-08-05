import { AppError } from '@errors/AppError';
import { User } from '@models/User';
import { IUsersService, UserDTO } from '@services/IUsersService';

export class UsersService implements IUsersService {
  async listAll(): Promise<User[]> {
    const users = User.find();
    return users;
  }

  async create({ name, email, password }: UserDTO): Promise<User> {
    const userAlreadyExists = await User.findOne({ email });

    if (userAlreadyExists) {
      throw new AppError('User with provided email already exists', 409);
    }

    const user = await User.create({ name, email, password });
    return user;
  }

  async getById(id: string): Promise<User> {
    const user = await User.findById(id);

    if (!user) {
      throw new AppError('User not found', 404);
    }

    return user;
  }

  async updateById(id: string, data: UserDTO): Promise<User> {
    const user = await User.findByIdAndUpdate(id, { ...data }, { new: true });

    if (!user) {
      throw new AppError('User not found', 404);
    }

    return user;
  }

  async deleteById(id: string): Promise<void> {
    const user = await User.findByIdAndDelete(id);
    if (!user) {
      throw new AppError('User not found', 404);
    }
  }
}
