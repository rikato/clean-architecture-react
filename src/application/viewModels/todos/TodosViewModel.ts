import { AnnotationsMap, makeObservable, observable, runInAction } from "mobx";
import { TodoViewModel } from "../todo/TodoViewModel";
import { TodosQuery } from "../../../core/queries/TodosQuery";

export class TodosViewModel {
  public todos: TodoViewModel[] = [];
  
  private _todosQuery: TodosQuery = new TodosQuery();

  constructor() {
    const annotations: AnnotationsMap<any, any> = {
      todos: observable,
    };

    makeObservable(this, annotations);

    this.setTodos();
  }

  private async setTodos(): Promise<void> {
    const todos = await this._todosQuery.handle();

    runInAction(async () => {
      this.todos = todos.map((t) => new TodoViewModel(t));
    });
  }
}
