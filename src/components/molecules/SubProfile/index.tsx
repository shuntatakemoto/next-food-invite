import Image from 'next/image';
import React from 'react';

export type SubProfileProps = {
  avatar?: string;
  username?: string;
};

export const SubProfile: React.FC<SubProfileProps> = (props) => {
  return (
    <div className='flex'>
      <div className='mr-5 w-8'>
        {props.avatar && (
          <Image
            src={props.avatar.replace('normal', '200x200')}
            alt='Profile Image'
            width='160'
            height='160'
          />
        )}
      </div>
      <p>Created by {props.username ? props.username : ''}</p>
    </div>
  );
};
