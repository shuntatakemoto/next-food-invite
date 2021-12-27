import React from 'react';
import { useSelector } from 'react-redux';
import { Profile } from '../../../components/molecules/Profile';
import FullList from '../../../components/organisms/FullList';
import Layout from '../../../components/templates/layout';
import { selectUser } from '../../../store/user/index';

const MyPage: React.FC = () => {
  const user = useSelector(selectUser);

  return (
    <Layout>
      <main className='flex flex-col bg-main-color'>
        <Profile photoUrl={user.photoUrl} displayName={user.displayName} />
        <FullList />
      </main>
    </Layout>
  );
};

export default MyPage;
