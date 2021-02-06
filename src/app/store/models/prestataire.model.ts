import {Utilisateur} from './utilisateur.model';

export class Prestataire extends Utilisateur {
  id: string;
  nombreMission:number;
  nombreAvis:number;
  note:number;
  recommander:boolean;


  constructor(user:Utilisateur, obj: Prestataire | any = {}) {

      super(user);
      this.id = obj.id || '';
      this.recommander = obj.recommander || false;
      this.nombreAvis = obj.nombreAvis || 0;
      this.note = obj.note || 0;
      this.nombreMission = obj.nombreMission || '';


  }
}
