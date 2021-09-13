import { TodoRepository } from "../../../infrastructure/repositories/TodoRepository";
import { IResult } from "../../results/successful/SuccessfulResult";

export class CompleteTodoCommand {
  private _todoRepository: TodoRepository = new TodoRepository();

  public async handle(uid: string): Promise<IResult<void>> {
    // Todo: fix; this returns new instance of a todo.
    // The todo, in this example, is not actually updated in backend.
    // So it returns the old todo which is not updated.
    // Question is, should we just return the reference (in memory) todo here or refetch it from backend?
    const todo = await this._todoRepository.getById(uid);

    if (!todo) throw Error("Todo not found.");

    const result = todo.complete();

    this._todoRepository.update(todo);

    return result;
  }
}
