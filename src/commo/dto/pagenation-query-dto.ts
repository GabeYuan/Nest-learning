import { Type } from 'class-transformer';
import { IsOptional, IsPositive } from 'class-validator';

export class PagenationQueryDto {
  @IsOptional()
  @IsPositive()
  limit: number;

  @IsOptional()
  @IsPositive()
  offset: number;
}
