//src/tests/ui-services.spec.ts
import { test } from "@playwright/test";
import * as allure from "allure-js-commons";
import { ContentType } from "allure-js-commons";
import { Actor } from "../actors/Actor";
import { BrowseTheWeb } from "../abilities/BrowseTheWeb";
import { ViewServices } from "../tasks/ViewServices";
import { ServicesPageIsDisplayed } from "../questions/ServicesPageIsDisplayed";

test("Página Services de ParaBank muestra lista de servicios", async ({
  page,
}) => {
  const user = new Actor("Visitante").whoCan(BrowseTheWeb.using(page));

  await user.attemptsTo(ViewServices.page());

  const screenshot = await page.screenshot();
  await allure.attachment(
    "Evidencia - Página Services",
    screenshot,
    ContentType.PNG
  );

  await user.should(ServicesPageIsDisplayed.correctly());
});
