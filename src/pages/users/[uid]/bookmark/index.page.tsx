import React from 'react';
import { BookmarkList } from './BookmarkList';
import { Headline } from '@/components/atoms/Headline';
import Layout from '@/components/templates/layout';
import { useJudgeLogin } from '@/hooks/useJudgeLogin';

const BookmarkPage: React.FC = () => {
  useJudgeLogin();
  return (
    <Layout>
      <main className='flex flex-col bg-main-color md:px-24 xl:px-60'>
        <div className='py-5'>
          <Headline headline='ブックマーク' />
        </div>
        <BookmarkList />
      </main>
    </Layout>
  );
};
export default BookmarkPage;
