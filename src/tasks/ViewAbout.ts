//src/tasks/ViewAbout.ts
import { Actor } from "../actors/Actor";
import { BrowseTheWeb } from "../abilities/BrowseTheWeb";

export class ViewAbout {
  static page() {
    return new ViewAbout();
  }

  async performAs(actor: Actor) {
    const page = actor.abilityTo(BrowseTheWeb).page;
    const baseURL =
      process.env.PARABANK_BASE_URL ?? "https://parabank.parasoft.com/parabank";
    await page.goto(`${baseURL}/about.htm`);
  }
}
