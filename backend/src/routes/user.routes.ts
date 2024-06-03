import { User } from "infra/entities/user.entity";
import { Repository } from "typeorm";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'

export class UserServices {
  public constructor(
    private readonly userRepository: Repository<User>
  ) { }

  public async createUser(user: User,): Promise<User | null> {
    user.senha = await bcrypt.hash(user.senha, 10)
    return await this.userRepository.save(user)
  }

  public async login(user: User, password: string): Promise<boolean> {
    return await bcrypt.compare(password, user.senha)
  }

  public async createToken(user: User) {
    const token = jwt.sign({
      userId: user.id
    },
      process.env.SECRET_KEY ?? '',
      {
        expiresIn: '8h'
      }
    )

    const { senha: _, ...userLogin } = user

    return {
      user: userLogin,
      token: token
    }
  }
}