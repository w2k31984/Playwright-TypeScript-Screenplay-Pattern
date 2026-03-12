//src/tests/ui-about.spec.ts
import { test } from "@playwright/test";
import * as allure from "allure-js-commons";
import { ContentType } from "allure-js-commons";
import { Actor } from "../actors/Actor";
import { BrowseTheWeb } from "../abilities/BrowseTheWeb";
import { ViewAbout } from "../tasks/ViewAbout";
import { AboutPageIsDisplayed } from "../questions/AboutPageIsDisplayed";

test("Página About de ParaBank muestra información correcta", async ({
  page,
}) => {
  const user = new Actor("Visitante").whoCan(BrowseTheWeb.using(page));

  await user.attemptsTo(ViewAbout.page());

  const screenshot = await page.screenshot();
  await allure.attachment(
    "Evidencia - Página About",
    screenshot,
    ContentType.PNG
  );

  await user.should(AboutPageIsDisplayed.correctly());
});
