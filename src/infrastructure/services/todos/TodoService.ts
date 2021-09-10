import { TodoEntity } from "../../../core/domain/entities/todo/TodoEntity";
import { GetTodosEndpoint } from "../../api/endpoints/todos/GetTodosEndpoint";
import { GetTodoByIdEndpoint } from "../../api/endpoints/todos/GetTodoByIdEndpoint";

export class TodoService {
  private _getTodosEndpoint = new GetTodosEndpoint();
  private _getTodoByIdEndpoint = new GetTodoByIdEndpoint();

  public async getAll(): Promise<TodoEntity[]> {
    return await this._getTodosEndpoint.get();
  }

  public async getById(uid: string): Promise<TodoEntity | undefined> {
    return await this._getTodoByIdEndpoint.getByUid(uid);
  }

  public async update(todo: TodoEntity): Promise<void> {}
}
