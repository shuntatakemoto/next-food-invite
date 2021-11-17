import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../../../../store/user';
import { Header } from '../../../../components/organisms/Header';
import { Footer } from '../../../../components/organisms/Footer';
import { useRouter } from 'next/router';
import { List } from '../../../../components/organisms/List';

const MyPage: React.FC = () => {
  const user = useSelector(selectUser);
  const router = useRouter();
  const { uid, listId } = router.query;
  console.log('uid test', uid, listId);

  // useEffect(() => {
  //   if (user.uid == '') {
  //     router.replace('/');
  //   }
  // }, [user.uid]);

  return (
    <main className='flex flex-col min-h-screen bg-main-color'>
      <Header isSignedIn={user.uid ? true : false} />
      <List />
      <Footer isSignedIn={user.uid ? true : false} />
    </main>
  );
};
export default MyPage;
