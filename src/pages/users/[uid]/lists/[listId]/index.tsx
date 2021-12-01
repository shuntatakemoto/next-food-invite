import React from 'react';
import { List } from '../../../../../components/organisms/List';
import { ListContent } from '../../../../../components/organisms/ListContent';

const ListPage: React.FC = () => {
  return (
    <main className='flex flex-col bg-main-color'>
      <List />
      <ListContent />
    </main>
  );
};
export default ListPage;
