import { ChangeEvent, useEffect, useState } from 'react';
import { UsersContext } from '.';
import { useApi } from '../hooks';
import useDebounce from '../hooks/useDebounce';
import { IUser, props } from '../interface';

const UsersProvider = ({ children }: props) => {
  const { usersData: allUsersData, loading, handleSubmit } = useApi();
  const [searchTerm, setSearchTerm] = useState('');
  const [usersData, setUsersData] = useState<IUser[]>([]);

  // Filter the users based on the search term
  useEffect(() => {
    const filteredUsersData = allUsersData.filter((user) => {
      const fullName =
        `${user.firstName} ${user.lastName}`.toLowerCase();
      return fullName.includes(searchTerm.toLowerCase());
    });
    setUsersData(filteredUsersData);
  }, [searchTerm, allUsersData]);

  // Integrate the useDebounce hook
  const handleDebouncedSearchTerm = useDebounce((term: string) => {
    setSearchTerm(term);
  }, 500);
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value;
    handleDebouncedSearchTerm(term);
  };
  return (
    <UsersContext.Provider
      value={{
        usersData,
        loading,
        handleSubmit,
        handleInputChange,
      }}>
      {children}
    </UsersContext.Provider>
  );
};

export default UsersProvider;
