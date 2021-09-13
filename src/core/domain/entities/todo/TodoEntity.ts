import { IResult } from "../../../results/Result";
import { SuccessfulResult } from "../../../results/successful/SuccessfulResult";
import { DomainErrorResult } from "../../../results/unsuccessful/DomainErrorResult";
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

  public get title(): string {
    return this._title;
  }

  public get completed(): boolean {
    return this._completed;
  }

  public complete(): IResult {
    if (this._completed) {
      return new DomainErrorResult(
        "Todo cannot be completed since it is already completed."
      );
    }

    this._completed = true;

    return new SuccessfulResult<TodoEntity>();
  }
}
