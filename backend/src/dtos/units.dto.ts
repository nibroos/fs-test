import { IsUnique } from '@/utils/customValidator';
import { IsString, IsEmail, IsNotEmpty, MinLength, MaxLength, IsOptional, ValidateIf } from 'class-validator';

export class CreateUnitDto {
  @IsNotEmpty()
  @IsString()
  @IsUnique('units', 'name')
  public name: string
}

export class UpdateUnitDto {
  @IsNotEmpty()
  public uuid: string

  @IsNotEmpty()
  @IsString()
  @IsUnique('units', 'name', 'uuid', true)
  public name: string
}
