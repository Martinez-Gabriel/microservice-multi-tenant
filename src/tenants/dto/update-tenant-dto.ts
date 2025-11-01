import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateTenantDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  domain: string;

  @IsNotEmpty()
  @IsString()
  ownerId: string;
}
