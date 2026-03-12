//src/tests/ui-register.spec.ts
import { test } from "@playwright/test";
import * as allure from "allure-js-commons";
import { ContentType } from "allure-js-commons";
import { Actor } from "../actors/Actor";
import { BrowseTheWeb } from "../abilities/BrowseTheWeb";
import { Register } from "../tasks/Register";
import { IsRegistered } from "../questions/IsRegistered";

test("Registro exitoso en ParaBank", async ({ page }) => {
  const user = new Actor("Cliente").whoCan(BrowseTheWeb.using(page));

  const uniqueUsername = `user_${Date.now()}`;
  const formData = {
    firstName: "Jane",
    lastName: "Doe",
    address: "123 Main St",
    city: "Beverly Hills",
    state: "CA",
    zipCode: "90210",
    phoneNumber: "310-555-1234",
    ssn: "123-45-6789",
    username: uniqueUsername,
    password: "demo123",
  };

  await user.attemptsTo(Register.with(formData));

  const screenshot = await page.screenshot();
  await allure.attachment(
    "Evidencia - Registro exitoso",
    screenshot,
    ContentType.PNG
  );

  await user.should(IsRegistered.successfully());
});
