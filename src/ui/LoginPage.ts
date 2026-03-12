//src/ui/LoginPage.ts
import { Locator, Page} from "playwright/test";

export class LoginPage {
    readonly username: Locator;
    readonly password: Locator;
    readonly loginButton: Locator;

    constructor(page : Page){
        this.username = page.locator('input[name="username"]');
        this.password = page.locator('input[name="password"]');
        this.loginButton = page.locator('input[value="Log In"]');
    }
}