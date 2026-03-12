//src/questions/AboutPageIsDisplayed.ts
import { expect } from "@playwright/test";
import { Actor } from "../actors/Actor";
import { BrowseTheWeb } from "../abilities/BrowseTheWeb";
import { AboutPage } from "../ui/AboutPage";

export class AboutPageIsDisplayed {
  static correctly() {
    return new AboutPageIsDisplayed();
  }

  async answeredBy(actor: Actor) {
    const page = actor.abilityTo(BrowseTheWeb).page;
    const aboutPage = new AboutPage(page);

    await expect(aboutPage.title).toBeVisible();
    await expect(aboutPage.demoNotice).toBeVisible();
  }
}
