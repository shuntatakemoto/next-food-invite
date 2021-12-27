import Link from 'next/link';
import React from 'react';
import { TwitterIcon } from 'react-share';
import { Lists } from '../../../types/lists';
import { User } from '../../../types/user';

export type ProfileProps = {
  posts: Lists;
  userInfo: User;
};

export const Profile: React.FC<ProfileProps> = (props) => {
  return (
    <div className='mt-5'>
      <img
        src={props.posts[0].avatar.replace('normal', '200x200')}
        alt='profile image'
        className='w-40 rounded-3xl'
      />
      <p className='text-2xl font-bold'>
        {props.posts[0].username ? props.posts[0].username : 'NO NAME'}
      </p>
      <Link href={`https://twitter.com/intent/user?user_id=${props.userInfo.twitterid}`} passHref>
        <div>
          <TwitterIcon size={32} round={true} />
        </div>
      </Link>
    </div>
  );
};
