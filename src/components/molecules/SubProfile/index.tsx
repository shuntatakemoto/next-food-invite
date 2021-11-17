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
          <img
            src={props.avatar.replace('normal', '200x200')}
            alt='Profile Image'
            className='w-40'
          />
        )}
      </div>
      <p>Created by {props.username ? props.username : 'NO NAME'}</p>
    </div>
  );
};
