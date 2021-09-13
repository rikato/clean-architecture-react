export interface IResult<T> {}

export class SuccessfulResult<T> implements IResult<T> {
  public Content(): T {
    return {} as T;
  }
}
