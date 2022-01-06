import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { TwitterIcon } from 'react-share';
import { User } from '../../../types/user';

export type ProfileProps = {
  userInfo: User;
};

export const Profile: React.FC<ProfileProps> = (props) => {
  return (
    <div>
      {props.userInfo.avatar && (
        <Image
          src={props.userInfo.avatar.replace('normal', '200x200')}
          alt='profile image'
          className='rounded-3xl'
          width='160'
          height='160'
          priority={true}
        />
      )}
      <div className='flex'>
        <p className='text-2xl font-bold'>
          {props.userInfo.username ? props.userInfo.username : 'NO NAME'}
        </p>
        <Link href={`https://twitter.com/intent/user?user_id=${props.userInfo.twitterid}`} passHref>
          <div className='pl-4'>
            <TwitterIcon size={32} round={true} />
          </div>
        </Link>
      </div>
    </div>
  );
};
