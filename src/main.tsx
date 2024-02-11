import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import FormProvider from './contextAPI/formProvider.tsx';
import UsersProvider from './contextAPI/usersProvider.tsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {' '}
    <FormProvider>
      <UsersProvider>
        <App />
      </UsersProvider>
    </FormProvider>
  </React.StrictMode>
);
