import {Utilisateur} from './utilisateur.model';

export class Client extends Utilisateur {
  id: string;


  constructor(user:Utilisateur, obj: Client | any = {}) {

      super(user);
      this.id = obj.id || '';


  }
}
