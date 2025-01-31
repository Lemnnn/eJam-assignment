import { Test, TestingModule } from '@nestjs/testing';
import { SuperheroesController } from './superheroes.controller';
import { SuperheroesService } from './superheroes.service';

describe('SuperheroesController', () => {
  let controller: SuperheroesController;
  let service: SuperheroesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SuperheroesController],
      providers: [SuperheroesService],
    }).compile();

    controller = module.get<SuperheroesController>(SuperheroesController);
    service = module.get<SuperheroesService>(SuperheroesService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('getAllSuperheroes', () => {
    it('should return paginated superheroes', () => {
      const page = 1;
      const limit = 2;

      const result = {
        total: 5,
        page: 1,
        limit: 2,
        data: [
          { id: 2, name: 'Batman', power: 'Intelligence', humility: 10 },
          { id: 3, name: 'Wonder Woman', power: 'Strength', humility: 8 },
        ],
      };

      jest.spyOn(service, 'getAllSuperheroes').mockImplementation(() => result);

      expect(controller.getAllSuperheroes(page, limit)).toEqual(result);
    });

    it('should handle invalid page and limit values', () => {
      const page = 0;
      const limit = -1;

      const result = {
        total: 5,
        page: 0,
        limit: 1,
        data: [{ id: 2, name: 'Batman', power: 'Intelligence', humility: 10 }],
      };

      jest.spyOn(service, 'getAllSuperheroes').mockImplementation(() => result);

      expect(controller.getAllSuperheroes(page, limit)).toEqual(result);
    });
  });
});
