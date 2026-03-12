//src/questions/IsLoggedIn.ts
import { expect } from "@playwright/test";
import { Actor } from "../actors/Actor";
import { BrowseTheWeb } from "../abilities/BrowseTheWeb";

export class IsLoggedIn {
  static successfully() {
    return new IsLoggedIn();
  }

  async answeredBy(actor: Actor) {
    const page = actor.abilityTo(BrowseTheWeb).page;
    await expect(page.getByRole("heading", { name: "Accounts Overview" })).toBeVisible();
  }
}
