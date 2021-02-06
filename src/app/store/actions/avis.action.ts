import { Action } from '@ngrx/store';
import { Avis } from '../models/avis.model';

export enum AvisActionTypes {
  AVIS_ADD_ITEM = '[AVIS] Add Item',
  AVIS_REMOVE_ITEM = '[AVIS] Remove Item',
}

export class AvisAddItemAction implements Action {
  readonly type = AvisActionTypes.AVIS_ADD_ITEM;

  constructor(public payload: Avis) {}
}

export class AvisRemoveItemAction implements Action {
  readonly type = AvisActionTypes.AVIS_REMOVE_ITEM;

  constructor(public payload: number) {}
}

export type AvisAction =AvisAddItemAction |AvisRemoveItemAction;
