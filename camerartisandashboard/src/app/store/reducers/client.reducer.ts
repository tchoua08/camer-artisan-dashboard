import { Client } from '../models/client.model';
import { ClientActionTypes, ClientAction } from '../actions/client.action';



const initialState: Array<Client> = [new Client()];

// tslint:disable-next-line: typedef
export function ClientReducer(
  state: Array<Client> = initialState,
  action: any
) {
  switch (action.type) {
    case ClientActionTypes.CLIENT_ADD_ITEM:
      return [...state, action.payload];
    default:
      return state;
  }
}
