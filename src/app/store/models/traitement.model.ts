import {Utilisateur} from './utilisateur.model';

export class Traitement {
  id: string;
  dateTraitement:string;
  user: Utilisateur;


  constructor(obj:Traitement | any = {}) {
     this.user = new obj.user() || null;
     this.id = obj.id || '';
     this.dateTraitement = obj.dateTraitement || '';


  }
}
