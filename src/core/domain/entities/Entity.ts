export class Entity {
  private _uid: string;

  protected constructor(uid: string) {
    this._uid = uid;
  }

  public get uid(): string {
    return this._uid;
  }
}
