import { ICreateCarDTO } from '@modules/cars/dtos/ICreateCarsDTO';
import { Car } from '@modules/cars/infra/typeorm/entities/Car';

import { ICarsRepository } from '../ICarsRepository';

class CarsRepositoryInMemory implements ICarsRepository {
  cars: Car[] = [];

  async create({
    brand,
    category_id,
    daily_rate,
    fine_amount,
    license_plate,
    description,
    name,
  }: ICreateCarDTO): Promise<Car> {
    const car = new Car();

    Object.assign(car, {
      brand,
      category_id,
      daily_rate,
      fine_amount,
      license_plate,
      description,
      name,
    });

    this.cars.push(car);

    return car;
  }

  async findLicensePlate(license_plate: string): Promise<Car> {
    return this.cars.find(car => car.license_plate === license_plate);
  }

  async findAvalible(
    brand?: string,
    category_id?: string,
    name?: string,
  ): Promise<Car[]> {
    const all = this.cars.filter(car => {
      if (
        car.avaible === true ||
        (brand && car.brand === brand) ||
        (category_id && car.category_id === category_id) ||
        (name && car.name === name)
      ) {
        return car;
      }
      return null;
    });
    // Filter retona lista Find apenas um
    return all;
  }
}

export { CarsRepositoryInMemory };
