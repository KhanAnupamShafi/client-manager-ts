import { useReducer } from 'react';
import { FormContext } from '.';
import { props } from '../interface';
import FormReducer, { initialState } from '../states/formReducer';

// simple form handle context provider
const FormProvider = ({ children }: props) => {
  const [state, dispatch] = useReducer(FormReducer, initialState);
  return (
    <FormContext.Provider value={{ state, dispatch }}>
      {children}
    </FormContext.Provider>
  );
};

export default FormProvider;
