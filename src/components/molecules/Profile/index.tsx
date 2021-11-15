import React from 'react';

export type ProfileProps = {
  photoUrl: string;
  displayName?: string;
};

export const Profile: React.FC<ProfileProps> = ({ photoUrl, displayName }) => {
  return (
    <div className='mt-5 '>
      <img
        src={photoUrl.replace('normal', '200x200')}
        alt='profile image'
        className='w-40 rounded-3xl'
      />
      <p className='text-2xl font-bold'>{displayName ? displayName : 'NO NAME'}</p>
    </div>
  );
};
