import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../../../store/user/index';
import { Header } from '../../../components/organisms/Header';
import { Footer } from '../../../components/organisms/Footer';
import FullList from '../../../components/organisms/FullList';
import { Profile } from '../../../components/molecules/Profile';

const MyPage: React.FC = () => {
  const user = useSelector(selectUser);

  return (
    <main className='flex flex-col min-h-screen bg-main-color'>
      <Header isSignedIn={user.uid ? true : false} />
      <Profile photoUrl={user.photoUrl} displayName={user.displayName} />
      <FullList />
      <Footer isSignedIn={user.uid ? true : false} />
    </main>
  );
};

export default MyPage;
