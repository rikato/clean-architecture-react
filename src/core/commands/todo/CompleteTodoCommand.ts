import { TodoRepository } from "../../../infrastructure/repositories/TodoRepository";
import { IResult, Result } from "../../results/Result";

export class CompleteTodoCommand {
  private _todoRepository: TodoRepository = new TodoRepository();

  public async handle(uid: string): Promise<IResult> {
    const todo = await this._todoRepository.getById(uid);

    if (!todo) throw Error("Todo not found.");

    const result = Result.From(todo.complete());

    if (result.isSuccessful) {
      this._todoRepository.update(todo);
    }

    return result;
  }
}
