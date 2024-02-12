import React, { createContext, useContext } from 'react';
import { IUser } from '../interface';
import { IFormAction } from '../states/action.interface';
import { initialState } from '../states/formReducer';
import FormProvider from './formProvider';
import UsersProvider from './usersProvider';

// ts interfaces for context types
interface UsersContextType {
  usersData: IUser[];
  loading: {
    state: boolean;
    message: string;
  };
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSortChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  toggleSortOrder: () => void;
  handlePageClick: (page: number | string) => void;
  sortOrder: string;
  sortBy: string;
  totalResults: number;
  currentPage: number;
}

interface FormContextType {
  state: IUser;
  dispatch: React.Dispatch<IFormAction>;
}
// Create the User context
const UsersContext = createContext<UsersContextType>({
  usersData: [],
  loading: { state: false, message: '' },
  handleSubmit: () => {},
  handleInputChange: () => {},
  handleSortChange: () => {},
  toggleSortOrder: () => {},
  handlePageClick: () => {},
  sortOrder: '',
  sortBy: '',
  totalResults: 0,
  currentPage: 1,
});

// Create the Form context
const FormContext = createContext<FormContextType>({
  state: initialState,
  dispatch: () => null,
});

// Create the hook to use User context
const useUsersContext = () => {
  const context = useContext(UsersContext);
  if (!context) {
    throw new Error(
      'useUsersContext must be used within a UsersProvider'
    );
  }
  return context;
};

// Create the hook to use Form context
const useFormContext = () => {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error(
      'useFormContext must be used within a FormProvider'
    );
  }
  return context;
};

export {
  FormContext,
  FormProvider,
  UsersContext,
  UsersProvider,
  useFormContext,
  useUsersContext,
};
