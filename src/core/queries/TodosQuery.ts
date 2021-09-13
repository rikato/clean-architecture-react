import { TodoRepository } from "../../infrastructure/repositories/TodoRepository";
import { TodoEntity } from "../domain/entities/todo/TodoEntity";

export class TodosQuery {
  private _todoRepository: TodoRepository = new TodoRepository();

  public async handle(): Promise<TodoEntity[]> {
    return await this._todoRepository.getAll();
  }
}
