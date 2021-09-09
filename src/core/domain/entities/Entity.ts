export class Entity {
  // Todo: don't expose uid. This is used for debug testing right now.
  public _uid: string;

  constructor(uid: string) {
    this._uid = uid;
  }

  protected get uid(): string {
    return this._uid;
  }
}
