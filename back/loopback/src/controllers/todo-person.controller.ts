import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  Todo,
  Person,
} from '../models';
import {TodoRepository} from '../repositories';

export class TodoPersonController {
  constructor(
    @repository(TodoRepository)
    public todoRepository: TodoRepository,
  ) { }

  @get('/todos/{id}/person', {
    responses: {
      '200': {
        description: 'Person belonging to Todo',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Person)},
          },
        },
      },
    },
  })
  async getPerson(
    @param.path.number('id') id: typeof Todo.prototype.id,
  ): Promise<Person> {
    return this.todoRepository.todo_owner(id);
  }
}
