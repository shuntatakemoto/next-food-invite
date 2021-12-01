import React from 'react';
import { useSelector } from 'react-redux';
import { Restaurant } from '../../../../../../../components/organisms/Restaurant';
import { selectUser } from '../../../../../../../store/user';

const RestaurantPage: React.FC = () => {
  const user = useSelector(selectUser);

  return (
    <main className='flex flex-col bg-main-color'>
      <Restaurant />
    </main>
  );
};
export default RestaurantPage;
