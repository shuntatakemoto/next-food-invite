import Image from 'next/image';
import React from 'react';
import { User } from '@/types/user';

export type SubProfileProps = {
  avatar?: string;
  username?: string;
  userInfo: User;
};

export const SubProfile: React.FC<SubProfileProps> = (props) => {
  return (
    <div className='flex'>
      <div className='mr-5 w-8'>
        {props.userInfo.newAvatar && (
          <Image
            src={props.userInfo.newAvatar.replace('normal', '200x200')}
            alt='profile image'
            className='rounded-3xl'
            width='160'
            height='160'
          />
        )}
        {!props.userInfo.newAvatar && props.userInfo.avatar && (
          <Image
            src={props.userInfo.avatar.replace('normal', '200x200')}
            alt='profile image'
            className='rounded-3xl'
            width='160'
            height='160'
          />
        )}
      </div>
      <p>Created by {props.username ? props.username : ''}</p>
    </div>
  );
};
