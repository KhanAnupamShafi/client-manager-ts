import { useEffect, useState } from 'react';
import { IUser } from '../interface';

const useApi = () => {
  const [usersData, setUsersData] = useState<IUser[]>([]);
  const [error, setError] = useState<{ message: string } | unknown>(
    null
  );
  const [loading, setLoading] = useState({
    state: false,
    message: '',
  });

  const fetchDummyUserData = async () => {
    try {
      setLoading((prevLoading) => ({
        ...prevLoading,
        state: true,
        message: 'getting user data...',
      }));

      const response = await fetch(
        'https://dummyjson.com/users?skip=90'
      );
      if (!response) {
        throw new Error(`Could not fetch from https://dummyjson.com`);
      }

      const data = await response.json();
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const users = data.users.map((user: any) => ({
        avatar: user.image,
        firstName: user.firstName,
        lastName: user.lastName,
        company: user.company.name,
        email: user.email,
        address: user.address.address,
        house: user.address.address.split(' ')[0],
        city: user.address.city,
      }));
      setUsersData(users);
    } catch (err) {
      setError(err);
    } finally {
      setLoading((prevLoading) => ({
        ...prevLoading,
        state: false,
        message: '',
      }));
    }
  };

  useEffect(() => {
    setLoading((prevLoading) => ({
      ...prevLoading,
      state: true,
      message: 'Connecting to Server...',
    }));

    fetchDummyUserData();
  }, []);

  return { usersData, loading, error };
};

export default useApi;
