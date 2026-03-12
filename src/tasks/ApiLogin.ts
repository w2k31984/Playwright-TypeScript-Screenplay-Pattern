//src/tasks/ApiLogin.ts
import { Actor } from "../actors/Actor";
import { CallAnApi } from "../abilities/CallAnApi";

export class ApiLogin {
  private response: any;

  constructor(
    private username: string,
    private password: string,
  ) {}

  static with(username: string, password: string) {
    return new ApiLogin(username, password);
  }

  async performAs(actor: Actor) {
    const api = actor.abilityTo(CallAnApi).request;

    this.response = await api.get(
      `services/bank/login/${this.username}/${this.password}`,
    );

    actor.lastApiResponse = this.response;
  }
}