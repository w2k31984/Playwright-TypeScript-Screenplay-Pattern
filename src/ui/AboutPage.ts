//src/ui/AboutPage.ts
import { Locator, Page } from "playwright/test";

export class AboutPage {
  readonly title: Locator;
  readonly demoNotice: Locator;

  constructor(page: Page) {
    this.title = page.getByRole("heading", {
      name: "ParaSoft Demo Website",
      level: 1,
    });
    this.demoNotice = page.locator("text=ParaBank is not a real bank!");
  }
}
