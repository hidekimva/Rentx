import { ICreateCarDTO } from '../dtos/ICreateCarsDTO';
import { Car } from '../infra/typeorm/entities/Car';

interface ICarsRepository {
  create(data: ICreateCarDTO): Promise<Car>;
  findLicensePlate(license_plate: string): Promise<Car>;
  findAvalible(
    brand?: string,
    category_id?: string,
    name?: string,
  ): Promise<Car[]>;
}

export { ICarsRepository };
