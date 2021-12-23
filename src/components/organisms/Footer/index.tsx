import { Emoji } from 'emoji-mart';
import Link from 'next/link';
import React from 'react';
import { auth } from '../../../libs/firebase';

export type FooterProps = {
  isSignedIn?: boolean;
};

export const Footer: React.FC<FooterProps> = ({ isSignedIn }) => {
  return (
    <div className='bg-sub-color flex h-16 items-center justify-evenly mt-auto'>
      {isSignedIn ? (
        <Link href='/' passHref>
          <p className='text-xl font-bold'>Home</p>
        </Link>
      ) : (
        <div className=''>
          <Emoji emoji='partying_face' size={32} />
        </div>
      )}

      {isSignedIn ? (
        <button onClick={() => auth.signOut()} className='text-xl font-bold'>
          Logout
        </button>
      ) : (
        <div className=''>
          <Emoji emoji='drooling_face' size={32} />
        </div>
      )}
    </div>
  );
};
