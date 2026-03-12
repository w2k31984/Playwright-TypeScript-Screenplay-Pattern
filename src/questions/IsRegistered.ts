//src/questions/IsRegistered.ts
import { expect } from "@playwright/test";
import { Actor } from "../actors/Actor";
import { BrowseTheWeb } from "../abilities/BrowseTheWeb";

export class IsRegistered {
  static successfully() {
    return new IsRegistered();
  }

  async answeredBy(actor: Actor) {
    const page = actor.abilityTo(BrowseTheWeb).page;
    await expect(
      page.getByRole("heading", { name: /^Welcome /, level: 1 })
    ).toBeVisible();
  }
}
