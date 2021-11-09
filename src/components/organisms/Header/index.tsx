import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../../../store/user';
import Link from 'next/link';
import LibraryAddIcon from '@material-ui/icons/LibraryAdd';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import SearchIcon from '@material-ui/icons/Search';
import { Emoji } from 'emoji-mart';

export type HeaderProps = {
  isSignedIn?: boolean;
};

export const Header: React.FC<HeaderProps> = ({ isSignedIn }) => {
  return (
    <div className='bg-sub-color flex h-16 items-center justify-evenly'>
      <Link href='/'>
        <h3 className='text-2xl font-bold'>Food Invite</h3>
      </Link>

      {isSignedIn ? (
        <Link href='/users/create-list'>
          <LibraryAddIcon fontSize='large' />
        </Link>
      ) : (
        <Emoji emoji='knife_fork_plate' size={32} />
      )}

      {isSignedIn ? (
        <Link href='/search'>
          <SearchIcon fontSize='large' />
        </Link>
      ) : (
        <Emoji emoji='male-cook' size={32} />
      )}

      {isSignedIn ? (
        <Link href='bookmark'>
          <BookmarkIcon fontSize='large' />
        </Link>
      ) : (
        <Emoji emoji='yum' size={32} />
      )}
    </div>
  );
};
