import { Injectable } from '@nestjs/common';
import { CreateSuperheroDto } from './dto/create-superhero.dto';

@Injectable()
export class SuperheroesService {
  private superheroes = [
    { id: 1, name: 'Superman', power: 'Superhuman', humility: 5 },
    { id: 2, name: 'Batman', power: 'Money', humility: 10 },
    { id: 3, name: 'Wonder Woman', power: 'Superhuman', humility: 8 },
    { id: 4, name: 'Flash', power: 'Speed', humility: 7 },
    { id: 5, name: 'Green Lantern', power: 'Energy Projection', humility: 6 },
  ];

  getAllSuperheroes(page: number, limit: number) {
    limit = Math.max(limit, 1);

    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;

    const superheroes = this.superheroes
      .sort((a, b) => b.humility - a.humility)
      .slice(startIndex, endIndex);

    return {
      total: this.superheroes.length,
      page,
      limit,
      data: superheroes,
    };
  }

  createASuperhero(superhero: CreateSuperheroDto) {
    const heroesLastId = [...this.superheroes].sort((a, b) => b.id - a.id);

    const NewSuperhero = {
      id: heroesLastId[0].id + 1,
      ...superhero,
    };

    this.superheroes.push(NewSuperhero);
    return NewSuperhero;
  }
}
