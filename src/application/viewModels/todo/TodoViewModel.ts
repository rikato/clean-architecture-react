import { makeAutoObservable, runInAction } from "mobx";
import { CompleteTodoCommand } from "../../../core/commands/todo/CompleteTodoCommand";
import { TodoEntity } from "../../../core/domain/entities/todo/TodoEntity";
import { UnsuccessfulResult } from "../../../core/results/unsuccessful/UnsuccessfulResult";

export class TodoViewModel {
  public title: string;
  public completed: boolean;

  private _uid: string;

  private _completeTodoCommand: CompleteTodoCommand = new CompleteTodoCommand();

  constructor(todo: TodoEntity) {
    this.title = todo.title;
    this.completed = todo.completed;

    this._uid = todo.uid;

    makeAutoObservable(this);
  }

  public async complete(): Promise<void> {
    runInAction(async () => {
      const result = await this._completeTodoCommand.handle(this._uid);

      if (result.isSuccessful) this.completed = true;
      else {
        const errorResult = result as UnsuccessfulResult;

        throw Error(
          `${errorResult.failure.failureReason}: ${errorResult.failure.message}`
        );
      }
    });
  }
}
