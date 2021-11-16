import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../../../../store/user';
// import WholeMyList from "../organisms/WholeMyList";
import { Header } from '../../../../components/organisms/Header';
import { Footer } from '../../../../components/organisms/Footer';
import { useRouter } from 'next/router';
// import FullList from '../../components/organisms/FullList';

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
      {/* <div className='mt-5 '>
        <img
          src={user.photoUrl.replace('normal', '200x200')}
          alt='profile image'
          className='w-40 rounded-3xl'
        />
        <p className='text-2xl font-bold'>{user.displayName}</p>
        <FullList />
      </div> */}
      <Footer isSignedIn={user.uid ? true : false} />
    </main>
  );
};

export default MyPage;
