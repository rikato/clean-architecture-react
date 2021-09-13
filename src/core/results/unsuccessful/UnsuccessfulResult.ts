import { IResult, IResultFailureReason } from "../IResult";

export class UnsuccessfulResult<T> implements IResult<T> {
  private _failure: IResultFailureReason | undefined;
  private _isSuccessful: boolean;
  private _isNotSuccessful: boolean;

  constructor(failure?: IResultFailureReason) {
    this._failure = failure;

    this._isSuccessful = false;
    this._isNotSuccessful = true;
  }

  public get failure(): IResultFailureReason | undefined {
    return this._failure;
  }

  public get isSuccessful() {
    return this._isSuccessful;
  }

  public get isNotSuccessful() {
    return this._isNotSuccessful;
  }
}
