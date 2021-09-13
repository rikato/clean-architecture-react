import { ISuccessfulResult } from "../Result";

export class SuccessfulResult<T> implements ISuccessfulResult<T> {
  private _content: T | undefined;
  private _isSuccessful: boolean;
  private _isNotSuccessful: boolean;

  constructor(content?: T) {
    this._content = content;

    this._isSuccessful = true;
    this._isNotSuccessful = false;
  }

  public get content(): T | undefined {
    return this._content;
  }

  public get isSuccessful() {
    return this._isSuccessful;
  }

  public get isNotSuccessful() {
    return this._isNotSuccessful;
  }
}
