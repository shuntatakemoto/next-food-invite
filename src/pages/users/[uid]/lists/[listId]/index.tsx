import React from 'react';
import { List } from '../../../../../components/organisms/List';
import { ListContent } from '../../../../../components/organisms/ListContent';
import Layout from '../../../../../components/templates/layout';

const ListPage: React.FC = () => {
  return (
    <Layout>
      <main className='flex flex-col bg-main-color'>
        <List />
        <ListContent />
      </main>
    </Layout>
  );
};
export default ListPage;
