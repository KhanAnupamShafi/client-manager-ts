import React, { useEffect, useState } from 'react';
import { useFormContext } from '../contextAPI';
import { IUser } from '../interface';

/**
 * This custom hook fetches user data from an API endpoint, manage loading and error states,
 * @returns  the fetched data to components in a reusable manner.
 */

const useApi = () => {
  // State variables to manage users data, error, and loading state
  const [usersData, setUsersData] = useState<IUser[]>([]);
  const [loading, setLoading] = useState({
    state: false,
    message: '',
  });

  const { state: formState } = useFormContext();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Add the form state to the existing usersData array after form submission
    setUsersData((prevUsersData) => [
      ...prevUsersData,
      { ...formState, id: parseInt(crypto.randomUUID()) },
    ]);
  };

  // Function to fetch dummy user data from the API
  const fetchDummyUserData = async () => {
    try {
      // Update loading state to indicate fetching is in progress
      setLoading((prevLoading) => ({
        ...prevLoading,
        state: true,
        message: 'getting user data...',
      }));

      // Fetch data from the API
      const response = await fetch(
        'https://dummyjson.com/users?skip=90'
      );
      if (!response) {
        throw new Error(`Could not fetch from https://dummyjson.com`);
      }
      // Extract users data from the response
      const data = await response.json();
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const users = data.users.map((user: any) => ({
        id: user.id,
        avatar: user.image,
        firstName: user.firstName,
        lastName: user.lastName,
        company: user.company.name,
        email: user.email,
        address: user.address.address.split(' ').slice(1),
        house: user.address.address.split(' ')[0],
        city: user.address.city,
      }));
      // const updatedUsersData = [...users];

      // Update users data state
      setUsersData(users);
    } catch (err) {
      // Set error state if fetching data fails
      console.log(err);
    } finally {
      // Reset loading state after fetching data, regardless of success or failure
      setLoading((prevLoading) => ({
        ...prevLoading,
        state: false,
        message: '',
      }));
    }
  };
  // Handle side effects once when the component mounts to fetch user data
  useEffect(() => {
    setLoading((prevLoading) => ({
      ...prevLoading,
      state: true,
      message: 'Connecting to Server...',
    }));

    fetchDummyUserData();
  }, []);

  return { usersData, loading, handleSubmit };
};

export default useApi;
