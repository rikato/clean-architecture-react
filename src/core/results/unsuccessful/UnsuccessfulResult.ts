import { IResultFailure, IUnsuccessfulResult } from "../Result";

export class UnsuccessfulResult implements IUnsuccessfulResult {
  private _isSuccessful: boolean;
  private _isNotSuccessful: boolean;

  private _failure: IResultFailure;

  constructor(failure: IResultFailure) {
    this._failure = failure;

    this._isSuccessful = false;
    this._isNotSuccessful = true;
  }

  public get isSuccessful() {
    return this._isSuccessful;
  }

  public get isNotSuccessful() {
    return this._isNotSuccessful;
  }

  public get failure(): IResultFailure {
    return this._failure;
  }
}
