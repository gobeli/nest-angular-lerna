import { Repository, DeleteResult } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CrudEntity } from './crud.entity';

export class CrudService<T extends CrudEntity> {
  constructor(private readonly repository: Repository<T>) {}

  async findAll(): Promise<T[]> {
    return await this.repository.find();
  }

  async findById(id: number): Promise<T> {
    return await this.repository.findOne(id);
  }

  // typescript bug
  // https://github.com/typeorm/typeorm/issues/1544
  async save(entity: T | any): Promise<T> {
    return await this.repository.save(entity);
  }

  async remove(id: number): Promise<DeleteResult> {
    return await this.repository.delete(id);
  }
}
