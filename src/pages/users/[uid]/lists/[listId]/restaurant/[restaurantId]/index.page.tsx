import React from 'react';
import Layout from '../../../../../../../components/templates/layout';
import { RestaurantContent } from '../RestaurantContent';

const RestaurantPage: React.FC = () => {
  return (
    <Layout>
      <main className='flex flex-col bg-main-color'>
        <RestaurantContent />
      </main>
    </Layout>
  );
};
export default RestaurantPage;
