import {Operation} from './operation.model';

export class Prestation {
  id: string;
  nom: string;
  photo: string;
  tarifHoraire:number;
  composition: string [];
  fraisDeplacement : number;
  operation: Operation[];



  constructor(obj:Prestation | any = {}) {
    this.nom = obj.nom || '';
    this.photo = obj.photo || '';
    this.composition= obj.composition || null;
    this.tarifHoraire = obj.tarifHoraire || 0;
    this.fraisDeplacement = obj.fraisDeplacement || 0;
    this.operation = new obj.operation() || null;
    this.id = obj.id || '';


  }
}
