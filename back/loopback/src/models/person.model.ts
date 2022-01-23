import {Entity, hasMany, model, property} from '@loopback/repository';
import { Todo, TodoWithRelations } from './todo.model';

@model({settings: {strict: false}})
export class Person extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
  })
  name?: string;

  @property({
    type: 'string',
  })
  role?: string;

  @property({
    type: 'date',
  })
  created?: string;

  @hasMany(() => Todo)
  todos: Todo[];

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Person>) {
    super(data);
  }
}

export interface PersonRelations {
  // describe navigational properties here
  todos?: TodoWithRelations[];
}

export type PersonWithRelations = Person & PersonRelations;
