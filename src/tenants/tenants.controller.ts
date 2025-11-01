import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { TenantsService } from './tenants.service';
import { CreateTenantDto } from './dto/create-dto';
import { UpdateTenantDto } from './dto/update-dto';

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

  @Get(':id')
  async getTenantById(@Param('id') id: string) {
    const tenant = await this.tenantsService.getTenantById(id);
    return {
      status: 'success',
      message: 'Tenant retrieved successfully',
      data: tenant,
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

  @Put(':id')
  async updateTenant(
    @Param('id') id: string,
    @Body() tenantData: UpdateTenantDto,
  ) {
    const updatedTenant = await this.tenantsService.updateTenant(
      id,
      tenantData,
    );
    return {
      status: 'success',
      message: 'Tenant updated successfully',
      data: updatedTenant,
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
