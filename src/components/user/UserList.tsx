import UserCard from './UserCard';

const UserList = () => {
  return (
    <div className="flex justify-center">
      <div className="container w-fit mx-auto  !px-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-14 ">
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
      </div>
    </div>
  );
};

export default UserList;
