import { Entity } from "../Entity";

export type TodoEntityType = {
  title: string;
  completed: boolean;
};

export class TodoEntity extends Entity implements TodoEntityType {
  private _title: string;
  private _completed: boolean;

  private constructor(uid: string, title: string, completed: boolean) {
    super(uid);

    this._title = title;
    this._completed = completed;
  }

  public get title(): string {
    return this._title;
  }

  public get completed(): boolean {
    return this._completed;
  }

  public complete(): void {
    this._completed = true;
  }

  public static new(title: string, completed: boolean): TodoEntity {
    return new TodoEntity("non-existing", title, completed);
  }

  public static existing(
    uid: string,
    title: string,
    completed: boolean
  ): TodoEntity {
    return new TodoEntity(uid, title, completed);
  }
}
