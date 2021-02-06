import { Action } from '@ngrx/store';
import { Commentaire } from '../models/commentaire.model';

export enum CommentaireActionTypes {
  COMMENTAIRE_ADD_ITEM = '[COMMENTAIRE] Add Item',
  COMMENTAIRE_REMOVE_ITEM = '[COMMENTAIRE] Remove Item',
}

export class CommentaireAddItemAction implements Action {
  readonly type = CommentaireActionTypes.COMMENTAIRE_ADD_ITEM;

  constructor(public payload: Commentaire) {}
}

export class CommentaireRemoveItemAction implements Action {
  readonly type = CommentaireActionTypes.COMMENTAIRE_REMOVE_ITEM;

  constructor(public payload: number) {}
}

export type CommentaireAction =CommentaireAddItemAction |CommentaireRemoveItemAction;
