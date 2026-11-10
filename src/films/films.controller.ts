import { Body, Controller, Delete, Get, HttpCode, Param, Patch, Post, Query } from '@nestjs/common';
import { FilmsService } from './films.service';
import { CreateFilmDto } from './DTO/create-film.dto';
import { UpdateFilmDto } from './DTO/update-film.dto';

@Controller('films')
export class FilmsController {
  constructor(private readonly filmsService: FilmsService) {}

  @Get()
  findAll(@Query('ditonton') ditonton?: string) {
    if (ditonton === 'true') return this.filmsService.findAll(true);
    if (ditonton === 'false') return this.filmsService.findAll(false);
    return this.filmsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.filmsService.findOne(id);
  }

  @Post()
  create(@Body() dto: CreateFilmDto) {
    return this.filmsService.create(dto);
  }
  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdateFilmDto) {
    return this.filmsService.update(id, dto);
  }

  @Delete(':id')
  @HttpCode(204)
  remove(@Param('id') id: string) {
    return this.filmsService.remove(id);
  }
}