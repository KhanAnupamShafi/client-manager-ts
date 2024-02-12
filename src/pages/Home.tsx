import Loader from '../components/Loader';
import Search from '../components/header/Search';
import Sort from '../components/header/Sort';
import AddUserForm from '../components/user/AddUserForm';
import UserList from '../components/user/UserList';
import { useUsersContext } from '../contextAPI';

const Home = () => {
  const { loading } = useUsersContext();
  return (
    <>
      {loading.state ? (
        <Loader />
      ) : (
        <>
          <Search />
          <Sort />
          <main>
            <UserList />
            <AddUserForm />
          </main>
        </>
      )}
    </>
  );
};

export default Home;
