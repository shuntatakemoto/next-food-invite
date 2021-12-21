import { useRouter } from 'next/router';
import React from 'react';
import { useSelector } from 'react-redux';
import { useFullList } from '../../../hooks/useFullList';
import { selectUser } from '../../../store/user';

export type ProfileProps = {
  photoUrl: string;
  displayName?: string;
  avatar?: string;
};

export const Profile: React.FC<ProfileProps> = ({ photoUrl, displayName }) => {
  const user = useSelector(selectUser);
  const router = useRouter();
  const { uid } = router.query;
  const { posts } = useFullList();
  return (
    <div className='mt-5 '>
      {uid == user.uid ? (
        <>
          <img
            src={photoUrl.replace('normal', '200x200')}
            alt='profile image'
            className='w-40 rounded-3xl'
          />
          <p className='text-2xl font-bold'>{displayName ? displayName : 'NO NAME'}</p>
        </>
      ) : (
        <>
          <img
            src={posts[0].avatar.replace('normal', '200x200')}
            alt='profile image'
            className='w-40 rounded-3xl'
          />
          <p className='text-2xl font-bold'>{posts[0].username ? posts[0].username : 'NO NAME'}</p>
        </>
      )}
    </div>
  );
};
