import {
  Controller,
  UseGuards,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
} from '@nestjs/common';
import { CrudService } from './crud.service';
import { CrudEntity } from './crud.entity';

export abstract class CrudController<T extends CrudEntity> {
  constructor(public service: CrudService<T>) {}

  @Get()
  getAll(): Promise<any> {
    return this.service.findAll();
  }

  @Get(':id')
  getOne(@Param() params): Promise<T> {
    return this.service.findById(params.id);
  }

  @Post()
  create(@Body() entity) {
    return this.service.save(entity);
  }

  @Put(':id')
  async update(@Body() entity, @Param() params) {
    const e = await this.service.findById(params.id);
    return this.service.save(Object.assign(e, entity));
  }

  @Delete(':id')
  async delete(@Param() params) {
    const e = await this.service.findById(params.id);
    this.service.remove(params.id);
  }
}
