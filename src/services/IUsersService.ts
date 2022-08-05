import { IUser } from '@models/User';

export interface UserDTO {
  name: string;
  email: string;
  password: string;
}

export interface IUsersService {
  listAll: () => Promise<IUser[]>;
  create(data: UserDTO): Promise<IUser>;
  getById(id: string): Promise<IUser>;
  updateById(id: string, data: UserDTO): Promise<IUser>;
  deleteById(id: string): Promise<void>;
}
