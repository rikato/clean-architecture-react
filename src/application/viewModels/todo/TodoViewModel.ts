import { makeAutoObservable, runInAction } from "mobx";
import { CompleteTodo } from "../../../core/commands/todo/CompleteTodo";
import { TodoEntity } from "../../../core/domain/entities/todo/TodoEntity";

export class TodoViewModel {
  public title: string;
  public completed: boolean;

  private _uid: string;

  private _completeTodoCommand: CompleteTodo = new CompleteTodo();

  constructor(todo: TodoEntity) {
    this.title = todo.title;
    this.completed = todo.completed;

    this._uid = todo._uid;

    makeAutoObservable(this);
  }

  public async complete(): Promise<void> {
    runInAction(async () => {
      const result = await this._completeTodoCommand.handle(this._uid);

      if (result.isSuccessful) this.completed = true;
      else throw Error("Unsuccessful result.");
    });
  }
}
