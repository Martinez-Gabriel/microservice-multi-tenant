import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateUserDto } from './dto/create-user-dto';
import { UpdateUserDto } from './dto/update-user-dto';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  async getUsers() {
    const users = await this.prisma.users.findMany({
      where: { deletedAt: null },
    });
    return users;
  }

  async getUserById(id: string) {
    const user = await this.prisma.users.findUnique({
      where: { id: id, deletedAt: null },
    });
    return user;
  }

  // async createUser(createUserDto: CreateUserDto) {
  //   const user = await this.prisma.users.create({data: createUserDto });
  //   return user;
  // }

  async updateUser(id: string, updateUserDto: UpdateUserDto) {
    const user = await this.prisma.users.update({
      where: { id: id, deletedAt: null },
      data: {
        firstName: updateUserDto.firstName,
        lastName: updateUserDto.lastName,
        email: updateUserDto.email,
        country: updateUserDto.country,
      },
    });
    return user;
  }

  async deleteUser(id: string) {
    const user = await this.prisma.users.delete({
      where: { id: id, deletedAt: null },
    });
    return user;
  }
}
