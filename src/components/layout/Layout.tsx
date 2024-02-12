import { Outlet } from 'react-router-dom';
import Header from '../header/Header';

// Pass the child to the layout outlet
export default function Layout() {
  return (
    <div>
      {/* Attaching all file components */}
      <Header />
      <Outlet />
      <footer className="flex justify-center items-center space-x-2 text-sm py-2">
        <span className="opacity-60">©</span>
        <span>{new Date().getFullYear()}</span>
        <span className="opacity-60">
          TechNext Task. Khan Anupam Shafi.
        </span>
      </footer>
    </div>
  );
}
