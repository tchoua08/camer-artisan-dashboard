
export class Client  {
  id: string;
  nom: string;
  prenom: string;
  numeroTel: string;
  photoprofil:string;
  email: string;
  adresse: string;
  dateCreation: string;
  validation: string;
  activation: string ;
  fonction: string;


  constructor(obj: Client | any = {}) {
    this.id = obj.id || '';
    this.nom= obj.nom || '';
    this.prenom= obj.prenom || '';
    this.numeroTel= obj.numeroTel || '';
    this.photoprofil= obj.photoprofil || '';
    this.email= obj.email || '';
    this.adresse= obj.adresse || '';
    this.dateCreation= obj.dateCreation || '';
    this.validation= obj.validation || 'oui';
    this.activation= obj.activation || 'oui';
    this.fonction= obj.fonction || '';

  }

}
