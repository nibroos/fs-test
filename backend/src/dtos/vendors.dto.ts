import { IsUnique } from '@/utils/customValidator';
import { IsString, IsEmail, IsNotEmpty, MinLength, MaxLength, IsOptional, ValidateIf } from 'class-validator';

export class CreateVendorDto {
  @IsOptional()
  public uuid?: string

  @IsNotEmpty()
  @IsString()
  @IsUnique('vendors', 'name')
  public name: string

  @IsString()
  @IsNotEmpty()
  public unit_id: string

  @IsOptional()
  @IsString()
  public address?: string
}

export class UpdateVendorDto {
  @IsNotEmpty()
  public uuid: string

  @IsNotEmpty()
  @IsString()
  @IsUnique('vendors', 'name', 'uuid', true)
  public name: string

  @IsNotEmpty()
  @IsString()
  public unit_id: string | number

  @IsOptional()
  @IsString()
  public address?: string
}
