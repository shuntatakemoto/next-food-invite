import React from 'react';
import { Headline } from '../../../../components/atoms/Headline';
import { Bookmark } from '../../../../components/organisms/Bookmark';
import Layout from '../../../../components/templates/layout';

const BookmarkPage: React.FC = () => {
  return (
    <Layout>
      <main className='flex flex-col bg-main-color'>
        <div className='py-5'>
          <Headline headline='ブックマーク' />
        </div>
        <Bookmark />
      </main>
    </Layout>
  );
};
export default BookmarkPage;
