import {Task} from './task.model';
export class Commande {
  id: string;
  dateCommande: string;
  dateSouhaite: string;
  heureSouhaite: string;
  nomClient: string;
  numeroTel: string;
  emailClient: string;
  titreMetier: string;
  titreOperation: string;
  tarifOperation: number;
  etat: string;
  etattranslate:string;
  descriptionOperation: string;
  details: Task[];

  constructor(commande: Commande | any = {}) {
    commande = commande || {};
    this.id = commande.id || '';
    this.etat = commande.etat || '';
    this.etattranslate = commande.etattranslate || '';
    this.details = commande.details || null;
    this.dateCommande = commande.dateCommande || '';
    this.dateSouhaite = commande.dateSouhaite || '';
    this.heureSouhaite = commande.heureSouhaite || '';
    this.nomClient = commande.nomClient || '';
    this.numeroTel = commande.numeroTel || '';
    this.emailClient = commande.emailClient || '';
    this.titreMetier = commande.titreMetier || '';
    this.titreOperation = commande.titreOperation || '';
    this.tarifOperation = commande.tarifOperation || '';
    this.descriptionOperation = commande.descriptionOperation || '';



  }

}
