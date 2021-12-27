import React from 'react';
import { Button } from '../../../../../../components/atoms/Button';
import { Headline } from '../../../../../../components/atoms/Headline';
import { useRestaurant } from './useRestaurant';

export const RestaurantContent: React.FC = () => {
  const { user, posts, RestaurantLink, deleteItem } = useRestaurant();

  return (
    <div className='flex-1 text-center'>
      <div className='py-8'>
        <Headline headline={posts?.name} />
      </div>
      <p className='text-center pb-4'>{posts?.memo}</p>
      <Button label='詳しい店情報' onClick={RestaurantLink} />

      <div className='mt-7'>
        <img src={posts?.imageurl} className='text-center w-72 h-72 object-cover m-auto' alt='' />
      </div>
      <div className='grid justify-items-center items-center py-4'>
        <p>added by {posts?.username}</p>
      </div>
      <div className='text-center '>
        {user.uid && <Button label='この店を削除する' onClick={deleteItem} primary={true} />}
      </div>
    </div>
  );
};

export default RestaurantContent;
