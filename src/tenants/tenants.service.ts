import { Injectable } from '@nestjs/common';
import { CreateTenantDto } from './dto/create-dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class TenantsService {
  constructor(private readonly prisma: PrismaService) {}

  async getTenants() {
    const tenants = await this.prisma.tenant.findMany();
    return tenants;
  }

  getTenantById(id: string): string {
    return `Details of tenant ${id}`;
  }

  async createTenant(createTenantDto: CreateTenantDto) {
    return await this.prisma.tenant.create({
      data: {
        name: createTenantDto.name,
        domain: createTenantDto.domain,
      },
    });
  }

  updateTenant(id: string, name: string): string {
    return `Tenant ${id} updated to ${name}`;
  }

  deleteTenant(id: string) {
    const tenant = this.prisma.tenant.delete({
      where: { id: id },
    });
    return tenant;
  }
}
