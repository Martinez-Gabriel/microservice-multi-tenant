import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { TenantsService } from './tenants.service';
import { CreateTenantDto } from './dto/create-dto';

@Controller('tenants')
export class TenantsController {
  constructor(private tenantsService: TenantsService) {}

  @Get()
  async getTenants() {
    const tenants = await this.tenantsService.getTenants();
    return {
      status: 'success',
      message: 'Tenants retrieved successfully',
      data: tenants,
    };
  }

  @Post()
  async createTenant(@Body() tenantData: CreateTenantDto) {
    const createNewTenant = await this.tenantsService.createTenant(tenantData);
    return {
      status: 'success',
      message: 'Tenant created successfully',
      data: createNewTenant,
    };
  }

  @Delete(':id')
  async deleteTenant(@Param('id') id: string) {
    const tenantDeleted = await this.tenantsService.deleteTenant(id);
    return {
      status: 'success',
      message: 'Tenant deleted successfully',
      data: tenantDeleted,
    };
  }
}
