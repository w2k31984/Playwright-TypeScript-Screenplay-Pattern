//src/ui/ServicesPage.ts
import { Locator, Page } from "playwright/test";

export class ServicesPage {
  readonly bookstoreServices: Locator;
  readonly parabankServices: Locator;
  readonly restfulServices: Locator;

  constructor(page: Page) {
    this.bookstoreServices = page.locator(
      "text=Available Bookstore SOAP services"
    );
    this.parabankServices = page.locator(
      "text=Available ParaBank SOAP services"
    );
    this.restfulServices = page.locator("text=Available RESTful services");
  }
}
