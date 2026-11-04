import { Outlet } from 'react-router-dom';

// Components
import { Header } from '../Header';
import { Footer } from '../Footer';

export function Layout() {
  return (
    <>
      <Header />
      <main className="container text-gray-500">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
