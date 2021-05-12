
export class Prestataire  {
  id: string;
  nombreMission:number;
  nombreAvis:number;
  note:number;
  recommander:boolean;
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
  prestation: string;

  constructor(obj: Prestataire | any = {}) {
    this.id = obj.id || '';
    this.nombreMission= obj.nombreMission || 0;
    this.nombreAvis= obj.nombreAvis || 0;
    this.note= obj.note || 0;
    this.recommander= obj.recommander || false;
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
    this.prestation= obj.prestation || '';

  }

}
