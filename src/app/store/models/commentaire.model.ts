import {Traitement} from './traitement.model';

export class Commentaire extends Traitement{
  id: string;
  description:string;
  objet:string;

  constructor(traitement:Traitement, obj: Commentaire | any = {}) {

    super(traitement);
    this.id = obj.id || '';
    this.objet = obj.objet || '';
    this.description = obj.description || '';


}
}
