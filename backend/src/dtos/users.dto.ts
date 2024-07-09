import { IsUnique } from '@/utils/customValidator';
import { IsString, IsEmail, IsNotEmpty, MinLength, MaxLength, IsOptional, ValidateIf } from 'class-validator';

export class CreateUserDto {
  @IsEmail()
  @IsUnique('users', 'email')
  public email: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(9)
  @MaxLength(32)
  public password: string;

  @IsOptional()
  @IsString()
  public first_name?: string

  @IsOptional()
  @IsString()
  public last_name?: string

  @IsOptional()
  public uuid?: string
}

export class UpdateUserDto {

  @IsNotEmpty()
  public uuid: string

  @IsEmail()
  @IsUnique('users', 'email', 'uuid', true)
  public email: string;

  @IsOptional()
  @IsString()
  @ValidateIf(o => o.password !== '')
  @MinLength(9)
  @MaxLength(32)
  public password: string;

  @IsOptional()
  @IsString()
  public first_name?: string

  @IsOptional()
  @IsString()
  public last_name?: string
}
