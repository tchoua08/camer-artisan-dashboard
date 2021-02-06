import { Action } from '@ngrx/store';
import { Operation } from '../models/operation.model';

export enum OperationActionTypes {
  OPERATION_ADD_ITEM = '[OPERATION] Add Item',
  OPERATION_REMOVE_ITEM = '[OPERATION] Remove Item',
}

export class OperationAddItemAction implements Action {
  readonly type = OperationActionTypes.OPERATION_ADD_ITEM;

  constructor(public payload: Operation) {}
}

export class OperationRemoveItemAction implements Action {
  readonly type = OperationActionTypes.OPERATION_REMOVE_ITEM;

  constructor(public payload: number) {}
}

export type OperationAction = OperationAddItemAction | OperationRemoveItemAction;
