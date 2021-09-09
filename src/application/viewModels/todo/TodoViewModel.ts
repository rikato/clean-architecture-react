import { makeAutoObservable, runInAction } from "mobx";
import { CompleteTodo } from "../../../core/commands/todo/CompleteTodo";
import { TodoEntity } from "../../../core/domain/entities/todo/TodoEntity";

export class TodoViewModel {
  public todo: TodoEntity;

  private _completeTodoCommand: CompleteTodo = new CompleteTodo();

  constructor(todo: TodoEntity) {
    this.todo = todo;

    makeAutoObservable(this);
  }

  public async complete() {
    runInAction(async () => {
      this.todo = await this._completeTodoCommand.handle(this.todo._uid);
    });
  }
}
