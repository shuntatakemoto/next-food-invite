import Image from 'next/image';
import React from 'react';
import { useRestaurant } from './useRestaurant';
import { Button } from '@/components/atoms/Button';
import { Headline } from '@/components/atoms/Headline';

export const RestaurantContent: React.FC = () => {
  const { uid, user, posts, RestaurantLink, deleteItem } = useRestaurant();

  return (
    <div className='flex-1 text-center'>
      <div className='py-8'>
        <Headline headline={posts?.name} />
      </div>
      <p className='pb-4 text-center'>{posts?.memo}</p>
      {posts?.url && <Button label='詳しい店情報' onClick={RestaurantLink} />}

      <div className='mt-7'>
        {posts?.imageurl && (
          <Image
            src={posts?.imageurl}
            alt='food-image'
            width='300'
            height='300'
            objectFit='cover'
            priority={true}
          />
        )}
      </div>
      <div className='grid justify-items-center items-center py-4'>
        <p>added by {posts?.username}</p>
      </div>
      <div className='text-center '>
        {user.uid == uid && <Button label='この店を削除する' onClick={deleteItem} primary={true} />}
      </div>
    </div>
  );
};

export default RestaurantContent;
