import { Action } from '@ngrx/store';
import { Metier } from '../models/metier.model';

export enum MetierActionTypes {
  METIER_ADD_ITEM = '[METIER] Add Item',
  METIER_REMOVE_ITEM = '[METIER] Remove Item',
}

export class MetierAddItemAction implements Action {
  readonly type = MetierActionTypes.METIER_ADD_ITEM;

  constructor(public payload: Metier) {}
}

export class MetierRemoveItemAction implements Action {
  readonly type = MetierActionTypes.METIER_REMOVE_ITEM;

  constructor(public payload: number) {}
}

export type MetierAction = MetierAddItemAction | MetierRemoveItemAction;
