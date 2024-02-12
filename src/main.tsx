import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import FormProvider from './contextAPI/formProvider.tsx';
import UsersProvider from './contextAPI/usersProvider.tsx';
import './index.css';
import router from './router/routes.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <FormProvider>
      <UsersProvider>
        <RouterProvider router={router} />
      </UsersProvider>
    </FormProvider>
  </React.StrictMode>
);
