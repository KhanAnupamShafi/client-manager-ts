import { useContext } from 'react';
import { UsersContext } from '../../contextAPI';
import UserCard from './UserCard';

const UserList = () => {
  const { usersData, loading } = useContext(UsersContext);

  // Display a loading indicator
  if (loading.state) {
    return <div>Loading...</div>;
  }
  // Check if usersData is empty
  if (usersData.length === 0) {
    return <div>No users found.</div>;
  }
  return (
    <div className="flex justify-center">
      <div className="container w-fit mx-auto  !px-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-14 ">
        {usersData.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
};

export default UserList;
