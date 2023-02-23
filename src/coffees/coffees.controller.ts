import {
  Controller,
  Get,
  Param,
  Res,
  HttpStatus,
  HttpCode,
  Body,
  Post,
  Patch,
  Delete,
  Query,
} from '@nestjs/common';
import { PagenationQueryDto } from 'src/commo/dto/pagenation-query-dto';
import { CoffeesService } from './coffees.service';
import { CreateCoffeeDto } from './dto/create-coffee.dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/create-coffee.dto/update-coffee.dto';

@Controller('coffees')
export class CoffeesController {
  constructor(private readonly coffeesService: CoffeesService) {}
  @Get()
  findAll(@Query() pagenationQuery: PagenationQueryDto) {
    // const { limit, offset } = pagenationQuery;
    return this.coffeesService.findAll(pagenationQuery);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.coffeesService.findOne(id);
  }

  @Post()
  create(@Body() createCoffeeDto: CreateCoffeeDto) {
    this.coffeesService.create(createCoffeeDto);
    return createCoffeeDto;
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCoffeeDto: UpdateCoffeeDto) {
    return this.coffeesService.update(id, updateCoffeeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.coffeesService.remove(id);
  }
}
