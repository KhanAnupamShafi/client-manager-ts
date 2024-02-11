import './App.css';
import Search from './components/header/Search';
import Sort from './components/header/Sort';
// import Layout from './components/layout/Layout';
import AddUserForm from './components/user/AddUserForm';
import UserList from './components/user/UserList';

function App() {
  return (
    <>
      {/* <Layout> */}
      <Search />
      <Sort />
      <UserList />
      <AddUserForm />
      {/* </Layout> */}
    </>
  );
}

export default App;
