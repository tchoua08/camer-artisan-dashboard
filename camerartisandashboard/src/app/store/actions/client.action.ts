import { Action } from '@ngrx/store';
import { Client } from '../models/client.model';

export enum ClientActionTypes {
  CLIENT_ADD_ITEM = '[CLIENT] Add Item',
  CLIENT_REMOVE_ITEM = '[CLIENT] Remove Item',
}

export class ClientAddItemAction implements Action {
  readonly type = ClientActionTypes.CLIENT_ADD_ITEM;

  constructor(public payload: Client) {}
}

export class ClientRemoveItemAction implements Action {
  readonly type = ClientActionTypes.CLIENT_REMOVE_ITEM;

  constructor(public payload: number) {}
}

export type ClientAction = ClientAddItemAction | ClientRemoveItemAction;
