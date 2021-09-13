export interface IResult<T> {
  isSuccessful: boolean;
  isNotSuccessful: boolean;
}
export interface IResultFailureReason {}

export class UnsuccessfulResult<T> implements IResult<T> {
  private _failure: IResultFailureReason | undefined;
  private _isSuccessful: boolean;
  private _isNotSuccessful: boolean;

  constructor(failure?: IResultFailureReason) {
    this._failure = failure;

    this._isSuccessful = false;
    this._isNotSuccessful = true;
  }

  public get failure() {
    return this._failure;
  }

  public get isSuccessful() {
    return this._isSuccessful;
  }

  public get isNotSuccessful() {
    return this._isNotSuccessful;
  }
}
