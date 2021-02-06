import {SousDetail} from './sousdetail.model';

export class Detail {
  id: string;
  nom: string;
  sousdetail: SousDetail[];

  constructor(obj:Detail | any = {}) {
    this.nom = obj.nom || '';
    this.sousdetail = new obj.sousdetail() || null;
    this.id = obj.id || '';


  }
}
