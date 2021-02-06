import { Utilisateur } from '../models/utilisateur.model';
import { UtilisateurActionTypes, UtilisateurAction } from '../actions/utilisateur.action';

const initialState: Array<Utilisateur> = [new Utilisateur()];

// tslint:disable-next-line: typedef
export function UtilisateurReducer(
  state: Array<Utilisateur> = initialState,
  action: any
) {
  switch (action.type) {
    case UtilisateurActionTypes.UTILISATEUR_ADD_ITEM:
      return [...state, action.payload];
    default:
      return state;
  }
}
