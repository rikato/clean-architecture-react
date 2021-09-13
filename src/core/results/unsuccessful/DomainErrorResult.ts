import { ResultFailureReason } from "../Result";
import { UnsuccessfulResult } from "./UnsuccessfulResult";

export class DomainErrorResult extends UnsuccessfulResult {
  constructor(message: string) {
    super({
      message,
      code: "1",
      failureReason: ResultFailureReason.DomainError,
    });
  }
}
