export class Utilisateur {
  id: string;
  nom: string;
  prenom: string;
  numeroTel: string;
  email: string;
  adresse: string;
  dateCreation: string;
  validation: string;
  activation: string ;

  constructor(obj: Utilisateur | any = {}) {
    this.id = obj.id || '';
    this.nom = obj.nom || '';
    this.adresse = obj.adresse || '';
    this.email = obj.email || '';
    this.prenom = obj.prenom || '';
    this.validation = obj.validation || '';
    this.activation = obj.activation || '';
    this.numeroTel = obj.numeroTel || '';
    this.dateCreation = obj.dateCreation || '';

  }
}
