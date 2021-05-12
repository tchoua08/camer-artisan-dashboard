import { Action } from '@ngrx/store';
import { Prestataire } from '../models/prestataire.model';

export enum PrestataireActionTypes {
  PRESTATAIRE_ADD_ITEM = '[PRESTATAIRE] Add Item',
  PRESTATAIRE_REMOVE_ITEM = '[PRESTATAIRE] Remove Item',
}

export class PrestataireAddItemAction implements Action {
  readonly type = PrestataireActionTypes.PRESTATAIRE_ADD_ITEM;

  constructor(public payload: Prestataire) {}
}

export class PrestataireRemoveItemAction implements Action {
  readonly type = PrestataireActionTypes.PRESTATAIRE_REMOVE_ITEM;

  constructor(public payload: number) {}
}

export type PrestataireAction = PrestataireAddItemAction | PrestataireRemoveItemAction;
