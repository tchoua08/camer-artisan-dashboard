import {Traitement} from './traitement.model';

export class Avis extends Traitement{
  id: string;

  constructor(traitement:Traitement, obj: Avis | any = {}) {

    super(traitement);
    this.id = obj.id || '';


}
}
