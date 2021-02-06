import {Detail} from './detail.model';

export class Operation {
  id: string;
  nom: string;
  photo:string;
  tarif:number;
  detail: Detail[];

  constructor(obj:Operation | any = {}) {
    this.nom = obj.nom || '';
    this.photo = obj.photo || '';
    this.tarif = obj.tarif || 0;
    this.detail = new obj.detail() || null;
    this.id = obj.id || '';


  }
}
