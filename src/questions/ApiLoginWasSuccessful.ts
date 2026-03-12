//src/questions/ApiLoginWasSuccessful.ts
import { expect } from "@playwright/test";
import { Actor } from "../actors/Actor";

export class ApiLoginWasSuccessful {
  static ok() {
    return new ApiLoginWasSuccessful();
  }

  async answeredBy(actor: Actor) {
    const response = actor.lastApiResponse!;

    expect(response.status()).toBe(200);

    const body = await response.text();
    expect(body).toContain("<customer>");
  }
}