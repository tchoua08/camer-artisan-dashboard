import { Action } from '@ngrx/store';
import { Commande } from '../models/commande.model';

export enum CommandeActionTypes {
  COMMANDE_ADD_ITEM = '[COMMANDE] Add Item',
  COMMANDE_REMOVE_ITEM = '[COMMANDE] Remove Item',
}

export class CommandeAddItemAction implements Action {
  readonly type = CommandeActionTypes.COMMANDE_ADD_ITEM;

  constructor(public payload: Commande) {}
}

export class CommandeRemoveItemAction implements Action {
  readonly type = CommandeActionTypes.COMMANDE_REMOVE_ITEM;

  constructor(public payload: number) {}
}

export type CommandeAction = CommandeAddItemAction | CommandeRemoveItemAction;
