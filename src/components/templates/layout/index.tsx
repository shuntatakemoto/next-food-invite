import { useSelector } from 'react-redux';
import { selectUser } from '../../../store/user';
import { Header } from '../../../components/organisms/Header';
import { Footer } from '../../../components/organisms/Footer';
import { ReactNode } from 'react';

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  const user = useSelector(selectUser);
  return (
    <div className='flex flex-col min-h-screen bg-main-color'>
      <Header isSignedIn={user.uid ? true : false} uid={user.uid} />
      <main>{children}</main>
      <Footer isSignedIn={user.uid ? true : false} />
    </div>
  );
};

export default Layout;
