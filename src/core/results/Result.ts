import { SuccessfulResult } from "./successful/SuccessfulResult";
import { UnsuccessfulResult } from "./unsuccessful/UnsuccessfulResult";
export enum ResultFailureReason {
  DomainError,
}

export interface IResultFailure {
  message: string;
  code: string;
  failureReason: ResultFailureReason;
}

export interface IResult {
  isSuccessful: boolean;
  isNotSuccessful: boolean;
}

export interface ISuccessfulResult<T> extends IResult {
  content: T | undefined;
}

export interface IUnsuccessfulResult extends IResult {
  failure: IResultFailure;
}

export class Result {
  public static From<T>(result: IResult) {
    if (result.isNotSuccessful) {
      return new UnsuccessfulResult((result as IUnsuccessfulResult).failure);
    }

    return new SuccessfulResult((result as ISuccessfulResult<T>).content);
  }
}
