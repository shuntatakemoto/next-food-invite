import { GetServerSideProps } from 'next';
import React from 'react';
import { List } from '../../../../../components/organisms/List';
import { ListContent } from '../../../../../components/organisms/ListContent';
import Layout from '../../../../../components/templates/layout';

type Props = {
  listId: string;
};

const ListPage: React.FC<Props> = (props) => {
  const { listId } = props;
  console.log('listId', listId);
  return (
    <Layout image={`${process.env.NEXT_PUBLIC_OGP_BASE_URL}/${listId}`}>
      <main className='flex flex-col bg-main-color'>
        <List />
        <ListContent />
      </main>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { listId } = context.query;
  console.log('getServerSideProps-test', listId);
  return {
    props: { listId },
  };
};

export default ListPage;
