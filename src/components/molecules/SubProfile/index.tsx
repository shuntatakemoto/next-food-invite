import Image from 'next/image';
import React from 'react';

export type SubProfileProps = {
  avatar?: string;
  username?: string;
};

export const SubProfile: React.FC<SubProfileProps> = (props) => {
  return (
    <div className='flex'>
      <div className='w-8 mr-5'>
        {props.avatar && (
          <Image
            src={props.avatar.replace('normal', '200x200')}
            alt='Profile Image'
            width='160'
            height='160'
            priority={true}
          />
        )}
      </div>
      <p>Created by {props.username ? props.username : 'NO NAME'}</p>
    </div>
  );
};
