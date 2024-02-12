import { SnackbarProvider } from 'notistack';
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
        <SnackbarProvider
          anchorOrigin={{
            horizontal: 'center',
            vertical: 'bottom',
          }}>
          <Search />
          <Sort />
          <main>
            <UserList />
            <AddUserForm />
          </main>
        </SnackbarProvider>
      )}
    </>
  );
};

export default Home;
