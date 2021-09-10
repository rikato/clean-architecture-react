export interface IGetMethodEndpoint<ReturnType> {
  get: () => Promise<ReturnType>;
}

export interface IGetByUidMethodEndpoint<ReturnType> {
  getByUid: (uid: string) => Promise<ReturnType>;
}

export interface ITodoDTO {
  uid: string;
  title: string;
  completed: boolean;
}
