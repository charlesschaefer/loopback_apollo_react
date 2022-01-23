import {Entity, model, property, belongsTo} from '@loopback/repository';
import { PersonWithRelations } from '.';
import {Person} from './person.model';

@model({
  settings: {
    foreignKeys: {
      fk_todo_owner: {
        name: 'fk_todo_owner',
        entity: 'Person',
        entityKey: 'id',
        foreignKey: 'owner',
      },
    },
  },
})
export class Todo extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  title: string;

  @property({
    type: 'boolean',
  })
  isComplete?: boolean;

  @belongsTo(() => Person, {name: 'todo_owner'}, {keyTo: 'Person.id'})
  owner: number;

  constructor(data?: Partial<Todo>) {
    super(data);
  }
}

export interface TodoRelations {
  // describe navigational properties here
  owner?: PersonWithRelations;
}

export type TodoWithRelations = Todo & TodoRelations;
