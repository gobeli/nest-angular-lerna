import { CrudEntity } from '@app/nest-crud';
import { Column, Table, Entity } from 'typeorm';

@Entity({ name: 'books' })
export class BookEntity extends CrudEntity {
  @Column() title: string;
  @Column() author: string;
}
