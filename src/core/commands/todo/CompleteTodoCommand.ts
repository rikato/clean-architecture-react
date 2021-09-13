import { TodoRepository } from "../../../infrastructure/repositories/TodoRepository";
import { IResult } from "../../results/IResult";

export class CompleteTodoCommand {
  private _todoRepository: TodoRepository = new TodoRepository();

  public async handle(uid: string): Promise<IResult<void>> {
    const todo = await this._todoRepository.getById(uid);

    if (!todo) throw Error("Todo not found.");

    const result = todo.complete();

    this._todoRepository.update(todo);

    return result;
  }
}
