import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../../../../../../../store/user';
import { Restaurant } from '../../../../../../../components/organisms/Restaurant';

const RestaurantPage: React.FC = () => {
  const user = useSelector(selectUser);

  return (
    <main className='flex flex-col bg-main-color'>
      <Restaurant />
    </main>
  );
};
export default RestaurantPage;
