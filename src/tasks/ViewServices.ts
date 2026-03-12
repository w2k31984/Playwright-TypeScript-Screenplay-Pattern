//src/tasks/ViewServices.ts
import { Actor } from "../actors/Actor";
import { BrowseTheWeb } from "../abilities/BrowseTheWeb";

export class ViewServices {
  static page() {
    return new ViewServices();
  }

  async performAs(actor: Actor) {
    const page = actor.abilityTo(BrowseTheWeb).page;
    const baseURL =
      process.env.PARABANK_BASE_URL ?? "https://parabank.parasoft.com/parabank";
    await page.goto(`${baseURL}/services.htm`);
  }
}
