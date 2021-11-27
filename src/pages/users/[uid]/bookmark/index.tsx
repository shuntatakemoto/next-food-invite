import React from 'react';
import { Headline } from '../../../../components/atoms/Headline';
import { Bookmark } from '../../../../components/organisms/Bookmark';

const BookmarkPage: React.FC = () => {
  return (
    <main className='flex flex-col bg-main-color'>
      <div className='py-5'>
        <Headline headline='ブックマーク' />
      </div>
      <Bookmark />
    </main>
  );
};
export default BookmarkPage;
