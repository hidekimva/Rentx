import { compare } from 'bcrypt';
import { sign } from 'jsonwebtoken';
import { inject, injectable } from 'tsyringe';

import { IUsersRepository } from '@modules/accounts/repositories/IUsersRepository';
import { AppError } from '@shared/errors/AppError';

interface IAuthenticateDTO {
  email: string;
  password: string;
}

interface IResponse {
  user: {
    name: string;
    email: string;
  };
  token: string;
}

@injectable()
class AuthenticateUserUseCase {
  constructor(
    @inject('UserRepository')
    private userRepository: IUsersRepository,
  ) {}

  async execute({ email, password }: IAuthenticateDTO): Promise<IResponse> {
    const user = await this.userRepository.findByEmail(email);

    if (!user) {
      throw new AppError('Email or Password incorrect!');
    }

    const passawordMatch = await compare(password, user.password);

    if (!passawordMatch) {
      throw new AppError('Email or Password incorrect!');
    }

    const token = sign({}, '91656314040cc97372e17d1912f344dd', {
      subject: user.id,
      expiresIn: '1d', // expira em 1d
    });

    const tokenReturn: IResponse = {
      token,
      user: {
        name: user.name,
        email: user.email,
      },
    };

    return tokenReturn;
  }
}

export { AuthenticateUserUseCase };

/*  
Aqui vai ser verificado se usuario existe

Se a senha esta correta

E gerar o JSONWEBTOKEN

*/
