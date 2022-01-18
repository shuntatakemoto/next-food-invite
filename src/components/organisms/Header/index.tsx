import BookmarkIcon from '@material-ui/icons/Bookmark';
import LibraryAddIcon from '@material-ui/icons/LibraryAdd';
import SearchIcon from '@material-ui/icons/Search';
import Link from 'next/link';
import React from 'react';
import { Button } from '@/components/atoms/Button';
import { auth, provider } from '@/libs/firebase';

export type HeaderProps = {
  isSignedIn?: boolean;
  uid?: string;
};

export const Header: React.FC<HeaderProps> = ({ isSignedIn, uid }) => {
  return (
    <div className='flex justify-evenly items-center h-16 bg-sub-color'>
      <Link href='/' passHref>
        <h3 className='text-2xl font-bold'>Food Invite</h3>
      </Link>

      {isSignedIn ? (
        <Link href='/users/[uid]/create-list' as={`/users/${uid}/create-list`} passHref>
          <LibraryAddIcon fontSize='large' />
        </Link>
      ) : (
        <Button
          label='Sign In with Twitter'
          onClick={() => auth.signInWithPopup(provider).catch((err) => alert(err.message))}
        />
      )}

      {isSignedIn && (
        <Link href='/search' passHref>
          <SearchIcon fontSize='large' />
        </Link>
      )}

      {isSignedIn && (
        <Link href='/users/[uid]/bookmark' as={`/users/${uid}/bookmark`} passHref>
          <BookmarkIcon fontSize='large' />
        </Link>
      )}
    </div>
  );
};
