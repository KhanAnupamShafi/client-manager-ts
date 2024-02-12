import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { SocialOne, SocialThree, SocialTwo } from '../assets/Social';
import Avatar from '../assets/avatar.svg';
import LogoCompany from '../assets/company.svg';
import LogoEmail from '../assets/email.svg';
import Loader from '../components/Loader';
import { useUsersContext } from '../contextAPI';
import { IUser } from '../interface';
const UserDetail = () => {
  const { id } = useParams();
  const { usersData } = useUsersContext();
  const [userData, setUserData] = useState<IUser | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  // find single user data
  useEffect(() => {
    setLoading(true);
    // Find user data from context
    const foundUser = usersData?.find(
      (user) => user.id?.toString() === id?.toString()
    );
    console.log(foundUser);

    if (foundUser) {
      setUserData(foundUser);
      setLoading(false);
    }
  }, [id, usersData]);

  // Display a loading indicator
  if (loading) {
    return <Loader />;
  }
  return (
    <div className="flex justify-center my-16">
      <div className="relative container bg-secondary p-8 text-center m-auto rounded-lg">
        <Link
          to={'/'}
          className="absolute top-0 left-0 bg-secondary text-primary rounded-l-md border-r border-b border-gray-200 py-2 hover:bg-primary hover:text-white px-3 transition-colors">
          <div className="flex flex-row items-center">
            <svg
              className="w-6 align-middle mr-0.5"
              viewBox="0 0 1024 1024"
              fill="currentColor">
              <path d="M946.5 505L560.1 118.8l-25.9-25.9a31.5 31.5 0 00-44.4 0L77.5 505a63.9 63.9 0 00-18.8 46c.4 35.2 29.7 63.3 64.9 63.3h42.5V940h691.8V614.3h43.4c17.1 0 33.2-6.7 45.3-18.8a63.6 63.6 0 0018.7-45.3c0-17-6.7-33.1-18.8-45.2zM568 868H456V664h112v204zm217.9-325.7V868H632V640c0-22.1-17.9-40-40-40H432c-22.1 0-40 17.9-40 40v228H238.1V542.3h-96l370-369.7 23.1 23.1L882 542.3h-96.1z" />
            </svg>
            <p className="ml-2">Home</p>
          </div>
        </Link>
        <div className="w-full">
          <div className="relative max-w-screen-xl mx-auto px-0 py-5">
            <img
              src="https://jthemes.com/themes/wp/jobbox/wp-content/uploads/2022/09/candidate-banner-1326x366.jpg"
              width="1326"
              height="366"
              className="max-w-full h-auto"
            />
          </div>
          <div className="max-w-[82%] table table-fixed mx-auto w-full pt-5 relative">
            <div className="absolute top-[-60px] left-0">
              <img
                className="rounded-full border-2 border-slate-100  backdrop-blur-sm bg-white/30"
                src={userData?.avatar || Avatar}
                width="85"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
              <div className="flex flex-col items-start justify-center">
                <h5 className="md:text-xl text-lg font-semibold">
                  {userData?.firstName} {userData?.lastName} ||
                  <div className="inline-flex gap-2 text-sm md:text-base">
                    <span className="text-gray-500 ml-3">
                      {userData?.house} {userData?.address},
                    </span>
                    <span> {userData?.city}</span>
                  </div>
                </h5>
                <div className="mt-2 flex items-center gap-1.5 text-sm">
                  <img
                    src={LogoCompany}
                    className="w-4 h-4 align-middle"
                  />
                  <span className=" text-gray-600 text-bold">
                    {userData?.company}
                  </span>
                </div>
                <div className="mt-2 flex items-center">
                  <img src={LogoEmail} className="w-4 h-4" />
                  <span className="text-gray-500 ml-2">
                    {userData?.email}
                  </span>
                </div>
              </div>
              <div className="md:text-right">
                <a
                  download="khan_anupam_cv.pdf"
                  href="https://drive.google.com/uc?export=download&id=1NvloK_rkQEySOcRQXHk3dr3Lu0uaIHSf"
                  className="inline-block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                  Download CV
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8">
            <ul className="flex items-center justify-center">
              <li>
                <a
                  href="https://www.linkedin.com/in/khan-anupam-shafi/"
                  className="px-4 py-2 mr-4 text-gray-700 border-b-2 border-transparent hover:border-blue-500">
                  <button className="bg-blue-600 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded">
                    <SocialOne />
                  </button>
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/KhanAnupamShafi"
                  target="_blank"
                  className="px-4 py-2 mr-4 text-gray-700 border-b-2 border-transparent hover:border-blue-500">
                  <button className="bg-gray-700 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded">
                    <SocialTwo />
                  </button>
                </a>
              </li>
              <li>
                <a
                  href="https://khan-anupam-portfolio.vercel.app/"
                  target="_blank"
                  className="px-4 py-2 mr-4 text-gray-700 border-b-2 border-transparent hover:border-blue-500">
                  <button className="bg-red-500 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded">
                    <SocialThree />
                  </button>
                </a>
              </li>
            </ul>
          </div>
          <div className="border-b border-gray-300 mt-8"></div>
        </div>
      </div>
    </div>
  );
};

export default UserDetail;
