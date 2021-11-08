import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../../store/user/index';
// import WholeMyList from "../organisms/WholeMyList";
import { Header } from '../../components/organisms/Header';
import { Footer } from '../../components/organisms/Footer';

const MyPage: React.FC = () => {
  //   useRequireLogin();
  const user = useSelector(selectUser);
  console.log(user);

  return (
    <>
      <Header isSignedIn={user.uid ? true : false} />
      <div className='mt-5 flex-1'>
        <img
          src={user.photoUrl.replace('normal', '200x200')}
          alt='profile image'
          className='w-40 rounded-3xl'
        />
        <p className='text-2xl font-bold'>{user.displayName}</p>
        {/* <WholeMyList /> */}
      </div>
      <Footer isSignedIn={user.uid ? true : false} />
    </>
  );
};

export default MyPage;
