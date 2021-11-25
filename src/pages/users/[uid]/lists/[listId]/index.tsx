import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../../../../../store/user';
import { List } from '../../../../../components/organisms/List';
import { ListContent } from '../../../../../components/organisms/ListContent';

const ListPage: React.FC = () => {
  const user = useSelector(selectUser);

  return (
    <main className='flex flex-col bg-main-color'>
      <List />
      <ListContent />
    </main>
  );
};
export default ListPage;
