import { Module } from '@nestjs/common';
import { TenantsModule } from './tenants/tenants.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [TenantsModule, UsersModule],
})
export class AppModule {}
