//src/abilities/CallAnApi.ts
import { APIRequestContext } from "@playwright/test";

export class CallAnApi {
  constructor(public request: APIRequestContext) {}

  static using(request: APIRequestContext) {
    return new CallAnApi(request);
  }
}