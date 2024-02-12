// An enum with all the types of actions to use in form reducer
export enum FormAction {
  INPUT = 'INPUT',
  ADD_USER = 'ADD_USER',
  CLEAR = 'CLEAR',
}

// An interface for form actions
export interface IFormAction {
  type: FormAction;
  payload?: { name: string; value: string };
}
