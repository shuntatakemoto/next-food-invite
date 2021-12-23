import BookmarkIcon from '@material-ui/icons/Bookmark';
import LibraryAddIcon from '@material-ui/icons/LibraryAdd';
import SearchIcon from '@material-ui/icons/Search';
import { Emoji } from 'emoji-mart';
import Link from 'next/link';
import React from 'react';

export type HeaderProps = {
  isSignedIn?: boolean;
  uid?: string;
};

export const Header: React.FC<HeaderProps> = ({ isSignedIn, uid }) => {
  return (
    <div className='bg-sub-color flex h-16 items-center justify-evenly'>
      <Link href='/' passHref>
        <h3 className='text-2xl font-bold'>Food Invite</h3>
      </Link>

      {isSignedIn ? (
        <Link href='/users/[uid]/create-list' as={`/users/${uid}/create-list`} passHref>
          <LibraryAddIcon fontSize='large' />
        </Link>
      ) : (
        <Emoji emoji='knife_fork_plate' size={32} />
      )}

      {isSignedIn ? (
        <Link href='/search' passHref>
          <SearchIcon fontSize='large' />
        </Link>
      ) : (
        <Emoji emoji='male-cook' size={32} />
      )}

      {isSignedIn ? (
        <Link href='/users/[uid]/bookmark' as={`/users/${uid}/bookmark`} passHref>
          <BookmarkIcon fontSize='large' />
        </Link>
      ) : (
        <Emoji emoji='yum' size={32} />
      )}
    </div>
  );
};
