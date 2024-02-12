import { ChangeEvent, useEffect, useState } from 'react';
import { UsersContext } from '.';
import { useApi } from '../hooks';
import useDebounce from '../hooks/useDebounce';
import { IUser, props } from '../interface';

const UsersProvider = ({ children }: props) => {
  const { usersData: allUsersData, loading, handleSubmit } = useApi();
  const [searchTerm, setSearchTerm] = useState('');
  const [usersData, setUsersData] = useState<IUser[]>([]);
  const [sortBy, setSortBy] = useState('');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
  const [totalResults, setTotalResults] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(1);

  // Filter the users based on the search term
  useEffect(() => {
    const filteredUsersData = allUsersData.filter((user) => {
      const fullName =
        `${user.firstName} ${user.lastName}`.toLowerCase();
      return fullName.includes(searchTerm.toLowerCase());
    });
    setUsersData(filteredUsersData);
    setTotalResults(filteredUsersData.length);
    setCurrentPage(1);
  }, [searchTerm, allUsersData]);

  // Integrate the useDebounce hook
  const handleDebouncedSearchTerm = useDebounce((term: string) => {
    setSearchTerm(term);
  }, 500);
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value;
    handleDebouncedSearchTerm(term);
  };

  const handleSortChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const sortBy = e.target.value;
    setSortBy(sortBy);
    // Reset sorting order to 'asc' when changing the sorting option
    setSortOrder('asc');
    sortUsers(sortBy, 'asc');
  };

  // Sort users by name / company in asc/desc order
  const sortUsers = (sortBy: string, order: 'asc' | 'desc') => {
    const sortedUsersData = [...usersData];
    switch (sortBy) {
      case 'option-1':
        sortedUsersData.sort((a, b) => {
          const comparison = a.firstName.localeCompare(b.firstName);
          return order === 'asc' ? comparison : -comparison;
        });
        break;
      case 'option-2':
        sortedUsersData.sort((a, b) => {
          const comparison = a.email.localeCompare(b.email);
          return order === 'asc' ? comparison : -comparison;
        });
        break;
      case 'option-3':
        sortedUsersData.sort((a, b) => {
          const comparison = a.company.localeCompare(b.company);
          return order === 'asc' ? comparison : -comparison;
        });
        break;
      default:
        break;
    }
    setUsersData(sortedUsersData);
  };
  // asc / desc toggler
  const toggleSortOrder = () => {
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    sortUsers(sortBy, sortOrder === 'asc' ? 'desc' : 'asc');
  };

  // Function to handle pagination click
  const handlePageClick = (page: number | string) => {
    if (typeof page === 'number') {
      setCurrentPage(page);
    } else {
      // Handle ellipsis click or other actions
    }
  };
  return (
    <UsersContext.Provider
      value={{
        usersData,
        loading,
        handleSubmit,
        handleInputChange,
        handleSortChange,
        toggleSortOrder,
        sortOrder,
        sortBy,
        totalResults,
        currentPage,
        handlePageClick,
      }}>
      {children}
    </UsersContext.Provider>
  );
};

export default UsersProvider;
