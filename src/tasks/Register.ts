//src/tasks/Register.ts
import { Actor } from "../actors/Actor";
import { BrowseTheWeb } from "../abilities/BrowseTheWeb";
import { RegisterPage, RegisterFormData } from "../ui/RegisterPage";

export class Register {
  constructor(private formData: RegisterFormData) {}

  static with(formData: RegisterFormData) {
    return new Register(formData);
  }

  async performAs(actor: Actor) {
    const page = actor.abilityTo(BrowseTheWeb).page;
    const registerPage = new RegisterPage(page);

    const baseURL =
      process.env.PARABANK_BASE_URL ?? "https://parabank.parasoft.com/parabank";
    await page.goto(`${baseURL}/register.htm`);

    await registerPage.firstName.fill(this.formData.firstName);
    await registerPage.lastName.fill(this.formData.lastName);
    await registerPage.address.fill(this.formData.address);
    await registerPage.city.fill(this.formData.city);
    await registerPage.state.fill(this.formData.state);
    await registerPage.zipCode.fill(this.formData.zipCode);
    await registerPage.phoneNumber.fill(this.formData.phoneNumber);
    await registerPage.ssn.fill(this.formData.ssn);
    await registerPage.username.fill(this.formData.username);
    await registerPage.password.fill(this.formData.password);
    await registerPage.confirmPassword.fill(this.formData.password);
    await registerPage.registerButton.click();
  }
}
