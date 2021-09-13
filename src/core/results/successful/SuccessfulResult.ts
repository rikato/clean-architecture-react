export interface IResult<T> {
  isSuccessful: boolean;
  isNotSuccessful: boolean;
}

export class SuccessfulResult<T> implements IResult<T> {
  private _content: T | undefined;
  private _isSuccessful: boolean;
  private _isNotSuccessful: boolean;

  constructor(content?: T) {
    this._content = content;

    this._isSuccessful = true;
    this._isNotSuccessful = false;
  }

  public get content() {
    return this._content;
  }

  public get isSuccessful() {
    return this._isSuccessful;
  }

  public get isNotSuccessful() {
    return this._isNotSuccessful;
  }
}
