//src/questions/ServicesPageIsDisplayed.ts
import { expect } from "@playwright/test";
import { Actor } from "../actors/Actor";
import { BrowseTheWeb } from "../abilities/BrowseTheWeb";
import { ServicesPage } from "../ui/ServicesPage";

export class ServicesPageIsDisplayed {
  static correctly() {
    return new ServicesPageIsDisplayed();
  }

  async answeredBy(actor: Actor) {
    const page = actor.abilityTo(BrowseTheWeb).page;
    const servicesPage = new ServicesPage(page);

    await expect(servicesPage.bookstoreServices).toBeVisible();
    await expect(servicesPage.parabankServices).toBeVisible();
    await expect(servicesPage.restfulServices).toBeVisible();
  }
}
