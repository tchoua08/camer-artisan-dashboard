import { Prestataire } from '../../store/models/prestataire.model';
import { PrestataireActionTypes, PrestataireAction } from '../actions/prestataire.action';

const initialState: Array<Prestataire> = [new Prestataire()];

// tslint:disable-next-line: typedef
export function PrestataireReducer(
  state: Array<Prestataire> = initialState,
  action: any
) {
  switch (action.type) {
    case PrestataireActionTypes.PRESTATAIRE_ADD_ITEM:
      return [...state, action.payload];
    default:
      return state;
  }
}
