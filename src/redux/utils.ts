import { CartListActionType } from 'redux/cartList/action';
import { Valueof } from 'types/utilitys';

import { ItemActionType } from './item/action';
import { ItemListActionType } from './itemList/action';

type AllThunkAction =
  | Valueof<typeof CartListActionType>
  | Valueof<typeof ItemListActionType>
  | Valueof<typeof ItemActionType>;

export const buildThunkActionGroup = <T, A extends AllThunkAction>(actionType: A) => ({
  request: () => ({ type: `${actionType}_REQUEST` as const }),
  success: (data?: T) => ({ type: `${actionType}_SUCCESS` as const, payload: data }),
  failure: (message: string) => ({
    type: `${actionType}_FAILURE` as const,
    payload: message,
  }),
});
