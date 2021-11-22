import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../../../../../store/user';
import { Header } from '../../../../../components/organisms/Header';
import { Footer } from '../../../../../components/organisms/Footer';
import { List } from '../../../../../components/organisms/List';
import { ListContent } from '../../../../../components/organisms/ListContent';

const ListPage: React.FC = () => {
  const user = useSelector(selectUser);

  return (
    <main className='flex flex-col min-h-screen bg-main-color'>
      <Header isSignedIn={user.uid ? true : false} />
      <List />
      <ListContent />
      <Footer isSignedIn={user.uid ? true : false} />
    </main>
  );
};
export default ListPage;
