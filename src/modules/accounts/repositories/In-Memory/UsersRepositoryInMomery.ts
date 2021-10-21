import { ICreateUserDTO } from '@modules/accounts/dtos/ICreateUserDTO';
import { Users } from '@modules/accounts/infra/typeorm/entities/User';
import { IUsersRepository } from '@modules/accounts/repositories/IUsersRepository';

class UsersRepositoryInMemory implements IUsersRepository {
  users: Users[] = [];

  async create({
    name,
    email,
    driver_license,
    password,
  }: ICreateUserDTO): Promise<void> {
    const user = new Users();

    Object.assign(user, {
      name,
      email,
      driver_license,
      password,
    });

    this.users.push(user);
  }

  async findByEmail(email: string): Promise<Users> {
    return this.users.find(user => user.email === email);
  }

  async findById(id: string): Promise<Users> {
    return this.users.find(user => user.id === id);
  }
}

export { UsersRepositoryInMemory };
