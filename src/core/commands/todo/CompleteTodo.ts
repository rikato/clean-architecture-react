import { TodoRepository } from "../../../infrastructure/repositories/TodoRepository";

export class CompleteTodo {
  private _todoRepository: TodoRepository = new TodoRepository();

  public async handle(uid: string): Promise<void> {
    const todo = await this._todoRepository.getById(uid);

    if (!todo) throw Error("Todo not found.");

    todo.complete();

    this._todoRepository.update(todo);
  }
}
