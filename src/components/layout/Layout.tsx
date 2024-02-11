import Header from '../header/Header';

interface props {
  children: React.ReactNode;
}
// Pass the child props to our layout
export default function Layout({ children }: props) {
  return (
    <div>
      {/* Attaching all file components */}
      <Header />
      {children}
      <p>Footer...</p>
    </div>
  );
}
