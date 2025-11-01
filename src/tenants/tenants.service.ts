import { Injectable } from '@nestjs/common';
import { CreateTenantDto } from './dto/create-dto';
import { PrismaService } from 'src/prisma.service';
import { UpdateTenantDto } from './dto/update-dto';

@Injectable()
export class TenantsService {
  constructor(private readonly prisma: PrismaService) {}

  async getTenants() {
    const tenants = await this.prisma.tenant.findMany({
      where: { deletedAt: null },
    });
    return tenants;
  }

  async getTenantById(id: string) {
    const tenant = await this.prisma.tenant.findUnique({
      where: { id: id, deletedAt: null },
    });
    return tenant;
  }

  async createTenant(createTenantDto: CreateTenantDto) {
    return await this.prisma.tenant.create({
      data: {
        name: createTenantDto.name,
        domain: createTenantDto.domain,
      },
    });
  }

  async updateTenant(id: string, UpdateTenantDto: UpdateTenantDto) {
    const tenant = await this.prisma.tenant.update({
      where: { id: id, deletedAt: null },
      data: {
        name: UpdateTenantDto.name,
        domain: UpdateTenantDto.domain,
      },
    });
    return tenant;
  }

  async deleteTenant(id: string) {
    const tenant = await this.prisma.tenant.delete({
      where: { id: id, deletedAt: null },
    });
    return tenant;
  }
}
