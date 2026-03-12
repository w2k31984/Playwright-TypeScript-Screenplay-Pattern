//src/actors/Actor.ts
import type { APIResponse } from "@playwright/test";

export class Actor {
  lastApiResponse?: APIResponse;

  constructor(
    public name: string,
    private abilities: any[] = [],
  ) {}

  whoCan(...abilities: any[]) {
    this.abilities.push(...abilities);
    return this;
  }

  abilityTo<T>(ability: new (...args: any[]) => T): T {
    const found = this.abilities.find(a => a instanceof ability);
    if(!found){
        throw new Error('${this.name} does not have ability ${ability.name}');
    }
    return found;
    }
    async attendsTo(...tasks: any[]){
      for (const task of tasks){
        await task.performAs(this);
      }   
    }

    attemptsTo = this.attendsTo;

    async should(question: any){
        await question.answeredBy(this);
    }
  };
