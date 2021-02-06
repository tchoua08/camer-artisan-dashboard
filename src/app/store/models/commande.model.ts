import {Client} from './client.model';
import { Prestataire } from './prestataire.model';
import {Metier} from './metier.model';
import { Operation } from './operation.model';
export class Commande {
  id: string;
  dateCommande: string;
  dispoReservation: string[][];
  client: Client;
  metier: Metier;
  operation: Operation;
  prestataire: Prestataire;

  constructor(obj: Commande | any = {}) {
    this.client = new obj.client() || null;
    this.id = obj.id || '';
    this.dateCommande = obj.dateCommande || '';
    this.dispoReservation = obj.dispoReservation || null;
    this.prestataire =new obj.prestataire() || null;
    this.client =new obj.client() || null;
    this.metier =new obj.metier() || null;
    this.operation =new obj.operation() || null;

  }
}
