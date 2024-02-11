import { IUser } from '../interface';
import { FormAction, IFormAction } from './action.interface';

export const initialState: IUser = {
  avatar: '',
  firstName: '',
  lastName: '',
  email: '',
  company: '',
  city: '',
  address: '',
  house: '',
};

const FormReducer = (state = initialState, action: IFormAction) => {
  switch (action.type) {
    case FormAction.INPUT:
      return {
        ...state,
        [action.payload!.name]: action.payload!.value,
      };
    case FormAction.ADD_USER:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default FormReducer;
