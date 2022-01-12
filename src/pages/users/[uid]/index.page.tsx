import React from 'react';
import { Profile } from '@/components/molecules/Profile';
import FullList from '@/components/organisms/FullList';
import Layout from '@/components/templates/layout';
import { useFullList } from '@/hooks/useFullList';
import { useUser } from '@/hooks/useUser';

const MyPage: React.FC = () => {
  const { uid, addList, posts } = useFullList();
  const { userInfo } = useUser();

  return (
    <Layout>
      <main className='flex flex-col bg-main-color md:px-24 xl:px-60'>
        <div className='pt-4 pl-4 md:pt-8 xl:pl-6'>
          <Profile userInfo={userInfo} />
        </div>
        <FullList posts={posts} uid={uid} addList={addList} />
      </main>
    </Layout>
  );
};

export default MyPage;
