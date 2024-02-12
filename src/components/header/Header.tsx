import { Link } from 'react-router-dom';
import Add from '../../assets/add.svg';
import Logo from '../../assets/logo.svg';
const Header = () => {
  return (
    <nav className="top-0 sticky z-40 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-primary">
      <div className="md:container !px-0 flex flex-wrap items-center justify-between">
        <div className="relative flex justify-between w-auto">
          <Link
            className="text-sm font-bold mr-4 py-2 whitespace-nowrap  text-white"
            to="/">
            <img className="w-32 h-8 -ml-2" src={Logo} alt="Logo" />
          </Link>
        </div>

        <ul className="flex flex-row list-none lg:ml-auto items-center">
          <li className="flex items-center">
            <a
              onClick={(e) => {
                const hero = document.getElementById('add_user');
                e.preventDefault(); // Stop Page Reloading
                hero && hero.scrollIntoView();
              }}
              className="bg-white text-primary active:bg-primary text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none ease-linear transition-all duration-150"
              href="#"
              target="_blank">
              <img className="h-5 w-5 inline" src={Add} />
              <span className="ml-1 align-middle">Add New User</span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
