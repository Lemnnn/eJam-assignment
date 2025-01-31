import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { SuperheroesService } from './superheroes.service';
import { CreateSuperheroDto } from './dto/create-superhero.dto';

@Controller('superheroes')
export class SuperheroesController {
  constructor(private readonly superheroesService: SuperheroesService) {}

  @Get()
  getAllSuperheroes(
    @Query('page') page: number,
    @Query('limit') limit: number,
  ) {
    return this.superheroesService.getAllSuperheroes(
      Number(page),
      Number(limit),
    );
  }

  @Post()
  createASuperhero(@Body() superhero: CreateSuperheroDto) {
    return this.superheroesService.createASuperhero(superhero);
  }
}
