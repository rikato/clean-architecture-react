import { EndpointMethod } from "./EndpointMethod";

export class GetMethod<T> extends EndpointMethod {
  protected async handle(uid?: string): Promise<T> {
    const result = await fetch(`${this.path}${uid ? `/${uid}.json` : ""}`, {
      method: "GET",
    });

    if (!result.ok) {
      const errorMessage = await result.text();

      throw Error(errorMessage);
    }

    const data = await result.json();

    return data.content as T;
  }
}
