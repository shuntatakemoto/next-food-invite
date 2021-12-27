import React from 'react';
import { useSelector } from 'react-redux';
import { Restaurant } from '../../../../../../../components/organisms/Restaurant';
import Layout from '../../../../../../../components/templates/layout';
import { selectUser } from '../../../../../../../store/user';

const RestaurantPage: React.FC = () => {
  return (
    <Layout>
      <main className='flex flex-col bg-main-color'>
        <Restaurant />
      </main>
    </Layout>
  );
};
export default RestaurantPage;
