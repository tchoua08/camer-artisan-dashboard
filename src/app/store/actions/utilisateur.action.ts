import { Action } from '@ngrx/store';
import { Utilisateur } from '../models/utilisateur.model';

export enum UtilisateurActionTypes {
  UTILISATEUR_ADD_ITEM = '[UTILISATEUR] Add Item',
  UTILISATEUR_REMOVE_ITEM = '[UTILISATEUR] Remove Item',
}

export class UtilisateurAddItemAction implements Action {
  readonly type = UtilisateurActionTypes.UTILISATEUR_ADD_ITEM;

  constructor(public payload: Utilisateur) {}
}

export class UtilisateurRemoveItemAction implements Action {
  readonly type = UtilisateurActionTypes.UTILISATEUR_REMOVE_ITEM;


  constructor(public payload: number) {}

}

export type UtilisateurAction = UtilisateurAddItemAction | UtilisateurRemoveItemAction;
