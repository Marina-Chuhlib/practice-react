import Navigation from 'components/Navigation/Navigation';
import { Outlet } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const Layout = () => {
	const {id} = useParams()

  return (
    <div>
      <header>
        {!id && <Navigation />}
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
