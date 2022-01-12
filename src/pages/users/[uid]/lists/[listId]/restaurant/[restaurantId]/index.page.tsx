import React from 'react';
import { RestaurantContent } from '../RestaurantContent';
import Layout from '@/components/templates/layout';

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
