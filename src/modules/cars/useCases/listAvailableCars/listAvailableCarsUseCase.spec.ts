import { CarsRepositoryInMemory } from '@modules/cars/repositories/in-memory/CarsRepositoryInMemory';

import { ListAvailableCarsUseCase } from './listAvailableCarsUseCase';

let listAvailableCarsUseCase: ListAvailableCarsUseCase;
let carsRepositoryInMemory: CarsRepositoryInMemory;

describe('List Cars', () => {
  beforeEach(() => {
    carsRepositoryInMemory = new CarsRepositoryInMemory();
    listAvailableCarsUseCase = new ListAvailableCarsUseCase(
      carsRepositoryInMemory,
    );
  });

  it('should be able to list all avalible cars', async () => {
    const car = await carsRepositoryInMemory.create({
      name: 'Car01',
      description: 'Description',
      daily_rate: 140.05,
      license_plate: 'AFB-8612',
      fine_amount: 100.11,
      brand: 'Car Brand',
      category_id: 'categoryID',
    });

    const cars = await listAvailableCarsUseCase.execute({});

    expect(cars).toEqual([car]);
  });

  it('should be able to list all avabile car br Brand', async () => {
    const car = await carsRepositoryInMemory.create({
      name: 'Car02',
      description: 'Description',
      daily_rate: 140.05,
      license_plate: 'AFB-8612',
      fine_amount: 100.11,
      brand: 'Car Brand2',
      category_id: 'categoryID',
    });

    const cars = await listAvailableCarsUseCase.execute({
      brand: 'Car Brand2',
    });

    expect(cars).toEqual([car]);
  });

  it('should be able to list all avabile car br name', async () => {
    const car = await carsRepositoryInMemory.create({
      name: 'Car03',
      description: 'Description',
      daily_rate: 140.05,
      license_plate: 'AFB-8612',
      fine_amount: 100.11,
      brand: 'Car Brand2',
      category_id: 'categoryID',
    });

    const cars = await listAvailableCarsUseCase.execute({
      name: 'Car03',
    });

    expect(cars).toEqual([car]);
  });

  it('should be able to list all avabile car br category_id', async () => {
    const car = await carsRepositoryInMemory.create({
      name: 'Car04',
      description: 'Description',
      daily_rate: 140.05,
      license_plate: 'AFB-8612',
      fine_amount: 100.11,
      brand: 'Car Brand2',
      category_id: 'categoryID45612',
    });

    const cars = await listAvailableCarsUseCase.execute({
      category_id: 'categoryID45612',
    });

    expect(cars).toEqual([car]);
  });
});
