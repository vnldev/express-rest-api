import { Request, Response } from 'express';

import { IUsersService } from '@services/IUsersService';

export class UsersController {
  constructor(private usersService: IUsersService) {}

  async getAllUsers(request: Request, response: Response): Promise<Response> {
    const users = await this.usersService.listAll();
    return response.json(users);
  }

  async createUser(request: Request, response: Response): Promise<Response> {
    const { name, email, password } = request.body;

    await this.usersService.create({ name, email, password });

    return response.status(201).send();
  }

  async getUserById(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const user = await this.usersService.getById(id);

    return response.json(user);
  }

  async updateUserById(
    request: Request,
    response: Response
  ): Promise<Response> {
    const { id } = request.params;
    const data = request.body;

    await this.usersService.updateById(id, data);

    return response.status(200).send();
  }

  async deleteUserById(
    request: Request,
    response: Response
  ): Promise<Response> {
    const { id } = request.params;
    await this.usersService.deleteById(id);
    return response.status(204).send();
  }
}
