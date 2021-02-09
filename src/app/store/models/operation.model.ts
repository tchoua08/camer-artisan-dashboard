import {Detail} from './detail.model';
import {Task} from './task.model';

export class Operation {
  nom: string;
  metier: string;
  description: string;
  tarif: number;
  detail: Task[];

  constructor(obj:Operation | any = {}) {
    this.nom = obj.nom || '';
    this.metier = obj.metier || '';
    this.description = obj.description || '';
    this.tarif = obj.tarif || 0;
    this.detail = obj.detail || null;


  }
}
