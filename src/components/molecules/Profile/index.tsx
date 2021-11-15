import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../../../store/user/index';

export const Profile: React.FC = () => {
  const user = useSelector(selectUser);

  return (
    <div className='mt-5 '>
      <img
        src={user.photoUrl.replace('normal', '200x200')}
        alt='profile image'
        className='w-40 rounded-3xl'
      />
      <p className='text-2xl font-bold'>{user.displayName}</p>
    </div>
  );
};
