import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {Todo, TodoRelations, Person} from '../models';
import {PersonRepository} from './person.repository';

export class TodoRepository extends DefaultCrudRepository<
  Todo,
  typeof Todo.prototype.id,
  TodoRelations
> {

  public readonly todo_owner: BelongsToAccessor<Person, typeof Todo.prototype.id>;

  constructor(
    @inject('datasources.db') dataSource: DbDataSource, @repository.getter('PersonRepository') protected personRepositoryGetter: Getter<PersonRepository>,
  ) {
    super(Todo, dataSource);
    this.todo_owner = this.createBelongsToAccessorFor('todo_owner', personRepositoryGetter,);
    this.registerInclusionResolver('todo_owner', this.todo_owner.inclusionResolver);
  }
}
