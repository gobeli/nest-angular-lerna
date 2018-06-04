import { Entity } from "./entity.interface";

export interface Book extends Entity {
  id: number;
  title: string;
  author: string;
}
