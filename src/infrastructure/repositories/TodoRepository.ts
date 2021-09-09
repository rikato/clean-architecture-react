import { TodoEntity } from "../../core/domain/entities/todo/TodoEntity";
import { TodoService } from "../services/todos/TodoService";

export class TodoRepository {
  private service = new TodoService();

  public async getAll(): Promise<TodoEntity[]> {
    return await this.service.getAll();
  }

  public async getById(uid: string): Promise<TodoEntity | undefined> {
    return await this.service.getById(uid);
  }

  public async update(todo: TodoEntity) {
    await this.service.update(todo);
  }
}
