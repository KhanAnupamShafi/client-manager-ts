import './App.css';
import Search from './components/header/Search';
import Layout from './components/layout/Layout';
import AddUserForm from './components/user/AddUserForm';
import UserList from './components/user/UserList';

function App() {
  return (
    <>
      <Layout>
        <Search />
        <UserList />
        <AddUserForm />
      </Layout>
    </>
  );
}

export default App;