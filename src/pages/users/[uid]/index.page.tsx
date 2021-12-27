import React from 'react';
import { Profile } from '../../../components/molecules/Profile';
import FullList from '../../../components/organisms/FullList';
import Layout from '../../../components/templates/layout';
import { useFullList } from '../../../hooks/useFullList';
import { useUser } from '../../../hooks/useUser';

const MyPage: React.FC = () => {
  const { posts } = useFullList();
  const { userInfo } = useUser();

  return (
    <Layout>
      <main className='flex flex-col bg-main-color'>
        <Profile posts={posts} userInfo={userInfo} />
        <FullList />
      </main>
    </Layout>
  );
};

export default MyPage;
