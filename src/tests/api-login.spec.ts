//src/tests/api-login.spec.ts
import { test, request } from "@playwright/test";
import { Actor } from "../actors/Actor";
import { CallAnApi } from "../abilities/CallAnApi";
import { ApiLogin } from "../tasks/ApiLogin";
import { ApiLoginWasSuccessful } from "../questions/ApiLoginWasSuccessful";

test("Login exitoso vía API ParaBank", async ({ playwright }) => {
  const baseURL =
    process.env.PARABANK_BASE_URL ?? "https://parabank.parasoft.com/parabank";
  const apiContext = await request.newContext({
    baseURL: `${baseURL}/`,
  });

  const apiUser = new Actor("ApiClient").whoCan(CallAnApi.using(apiContext));

  await apiUser.attemptsTo(
    ApiLogin.with(
      process.env.PARABANK_USERNAME ?? "john",
      process.env.PARABANK_PASSWORD ?? "demo"
    )
  );

  await apiUser.should(ApiLoginWasSuccessful.ok());
});