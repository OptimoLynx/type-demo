import { Attributes } from "./Attributes";
import { Eventing } from "./Eventing";
import { Sync } from "./Sync";

export interface UserProps {
  id?: number;
  name?: string;
  age?: number;
}

const rootURL = 'http://localhost:3000/users'; 

export class User {
  public events: Eventing = new Eventing();
  public sysnc: Sync<UserProps> = new Sync<UserProps>(rootURL);
  public attributes: Attributes<UserProps>;

  constructor(attrs: UserProps) {
    this.attributes = new Attributes<UserProps>(attrs);
  }

/*   on(eventName: string, callback: Callback): void {
    this.events.on(eventName, callback);
  } */

}



