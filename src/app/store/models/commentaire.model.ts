
export class Commentaire{
  id: string;
  nomPrestataire : string;
  prenomPrestataire:string;
  photoPrestataire : string;
  emailPrestataire : string;
  commentaire : string;
  uidPrestataire :string;
  nomClient: string;
  prenomClient: string;
  emailClient :string;
  uidClient :string;
  photoClient:string;
  dateCommentaire:string;

  constructor(obj: Commentaire | any = {}) {

    
    this.id = obj.id || '';
    this.nomPrestataire = obj.nomPrestataire || '';
    this.prenomPrestataire = obj.prenomPrestataire || '';
    this.photoPrestataire = obj.photoPrestataire || '';
    this.emailPrestataire = obj.emailPrestataire || '';
    this.commentaire = obj.commentaire || '';
    this.uidPrestataire = obj.uidPrestataire || '';
    this.nomClient = obj.nomClient || '';
    this.dateCommentaire = obj.dateCommentaire || '';
    this.prenomClient = obj.prenomClient || '';
    this.emailClient = obj.emailClient || '';
    this.uidClient = obj.uidClient || '';
    this.photoClient = obj.photoClient || '';


   }
}
