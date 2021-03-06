import { CarsRepositoryInMemory } from '@modules/cars/repositories/in-memory/CarsRepositoryInMemory';
import { AppError } from '@shared/errors/AppError';

import { CreateCarUseCase } from './CreateCarUseCase';

let createCarUseCase: CreateCarUseCase;
let carsRespositoryInMemory: CarsRepositoryInMemory;

describe('Create Car', () => {
  beforeEach(() => {
    carsRespositoryInMemory = new CarsRepositoryInMemory();
    createCarUseCase = new CreateCarUseCase(carsRespositoryInMemory);
  });

  it('should be able to create a new car', async () => {
    const car = await createCarUseCase.execute({
      name: 'Name Car',
      description: 'Description car',
      daily_rate: 100,
      license_plate: 'ABC-5468',
      fine_amount: 60,
      brand: 'Brand',
      category_id: 'Category',
    });

    expect(car).toHaveProperty('id');
  });

  it('should be able to create a car with exits license plate', async () => {
    expect(async () => {
      await createCarUseCase.execute({
        name: 'Car1',
        description: 'Description car',
        daily_rate: 100,
        license_plate: 'ABC-5468',
        fine_amount: 60,
        brand: 'Brand',
        category_id: 'Category',
      });
      await createCarUseCase.execute({
        name: 'Car2',
        description: 'Description car',
        daily_rate: 100,
        license_plate: 'ABC-5468',
        fine_amount: 60,
        brand: 'Brand',
        category_id: 'Category',
      });
    }).rejects.toBeInstanceOf(AppError);
  });

  it('should be able to create a car with available true by default', async () => {
    const car = await createCarUseCase.execute({
      name: 'Car Available',
      description: 'Description car',
      daily_rate: 100,
      license_plate: 'ABCD-5468',
      fine_amount: 60,
      brand: 'Brand',
      category_id: 'Category',
    });

    expect(car.avaible).toBe(true);
  });
});
