export interface IResultFailureReason {}

export interface IResult<T> {
  isSuccessful: boolean;
  isNotSuccessful: boolean;
  content?: T | undefined;
  failure?: IResultFailureReason | undefined;
}
