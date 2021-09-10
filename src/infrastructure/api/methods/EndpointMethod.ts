export abstract class EndpointMethod {
  private _path: string;

  constructor(path: string) {
    this._path = path;
  }

  protected get path() {
    return this._path;
  }

  protected abstract handle(): Promise<any>;
}
