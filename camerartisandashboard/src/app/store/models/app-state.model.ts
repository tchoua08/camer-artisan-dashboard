import { Utilisateur } from './utilisateur.model';
import { Client } from './client.model';
import { Prestataire } from './prestataire.model';
import { Metier } from './metier.model';
import { Operation } from './operation.model';

export interface AppState {
  readonly utilisateur: Array<Utilisateur>;
  readonly client: Array<Client>;
  readonly prestataire: Array<Prestataire>;
  readonly metier: Array<Metier>;
  readonly operation: Array<Operation>;
}
