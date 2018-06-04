import { PrimaryGeneratedColumn, Column, CreateDateColumn } from "typeorm";
import { Entity } from "@app/interfaces";

export abstract class CrudEntity implements Entity {
  @PrimaryGeneratedColumn() id: number;

  @CreateDateColumn() created: Date;

  static factory<T>(type: { new (fields): T }, fields): T {
    return new type(fields);
  }
}
