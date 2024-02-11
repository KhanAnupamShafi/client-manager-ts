import { useContext, useState } from 'react';
import { UsersContext } from '../../contextAPI';
import Pagination from './Pagination';
import UserCard from './UserCard';

const UserList = () => {
  const { usersData, loading } = useContext(UsersContext);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const usersPerPage = 10; // Change this value as needed
  const totalPageCount = Math.ceil(usersData.length / usersPerPage);
  const pageNumber = Array.from(
    { length: totalPageCount },
    (_, i) => i + 1
  );

  // Calculate the index range of users to display for the current page
  const startIndex = (currentPage - 1) * usersPerPage;
  const endIndex = Math.min(
    startIndex + usersPerPage,
    usersData.length
  );
  const visibleUsers = usersData.slice(startIndex, endIndex);

  // Display a loading indicator
  if (loading.state) {
    return <div>Loading...</div>;
  }
  // Check if usersData is empty
  if (usersData.length === 0) {
    return <div>No users found.</div>;
  }

  // Function to handle pagination click
  const handlePageClick = (page: number | string) => {
    if (typeof page === 'number') {
      setCurrentPage(page);
    } else {
      // Handle ellipsis click or other actions
      // You may want to implement this based on your pagination design
    }
  };
  return (
    <div>
      <div className="flex justify-center">
        <div className="container w-fit mx-auto  !px-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-14 ">
          {visibleUsers.map((user) => {
            return <UserCard key={user.id} user={user} />;
          })}
        </div>
      </div>
      <Pagination
        onPageClick={handlePageClick}
        pageNumber={pageNumber}
        currentPage={currentPage}
      />
    </div>
  );
};

export default UserList;
