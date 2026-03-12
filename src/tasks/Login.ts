//src/tasks/Login.ts
import { Actor } from "../actors/Actor";
import { BrowseTheWeb } from "../abilities/BrowseTheWeb";
import { LoginPage } from "../ui/LoginPage";

export class Login {
  constructor(
    private username: string,
    private password: string,
  ) {}

  static with(username: string, password: string) {
    return new Login(username, password);
  }
  async performAs(actor: Actor) {
    const page = actor.abilityTo(BrowseTheWeb).page;
    const loginPage = new LoginPage(page);

    await page.goto("https://parabank.parasoft.com/parabank/index.htm");
    await loginPage.username.fill(this.username);
    await loginPage.password.fill(this.password);
    await loginPage.loginButton.click();
  }
}
