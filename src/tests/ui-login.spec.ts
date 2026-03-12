//src/tests/ui-login.spec.ts
import { test } from "@playwright/test";
import * as allure from "allure-js-commons";
import { ContentType } from "allure-js-commons";
import { Actor } from "../actors/Actor";
import { BrowseTheWeb } from "../abilities/BrowseTheWeb";
import { Login } from "../tasks/Login";
import { IsLoggedIn } from "../questions/IsLoggedIn";

test("Login exitoso en ParaBank", async ({ page }) => {
  const user = new Actor("Cliente").whoCan(BrowseTheWeb.using(page));

  await user.attemptsTo(
    Login.with(
      process.env.PARABANK_USERNAME ?? "john",
      process.env.PARABANK_PASSWORD ?? "demo"
    )
  );

  // Captura de pantalla como evidencia en el reporte Allure
  const screenshot = await page.screenshot();
  await allure.attachment("Evidencia - Dashboard post-login", screenshot, ContentType.PNG);

  await user.should(IsLoggedIn.successfully());
});
