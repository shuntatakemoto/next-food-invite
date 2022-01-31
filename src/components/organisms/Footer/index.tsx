import Link from 'next/link';
import React from 'react';
import { auth } from '@/libs/firebase';

export type FooterProps = {
  isSignedIn?: boolean;
};

export const Footer: React.FC<FooterProps> = ({ isSignedIn }) => {
  return (
    <div className='flex justify-evenly items-center mt-auto h-16 bg-sub-color'>
      {isSignedIn ? (
        <Link href='/' passHref>
          <p className='text-xl font-bold'>Home</p>
        </Link>
      ) : (
        <small>© 2022 Food Invite</small>
      )}

      {isSignedIn && (
        <button onClick={() => auth.signOut()} className='text-xl font-bold'>
          Logout
        </button>
      )}
    </div>
  );
};
