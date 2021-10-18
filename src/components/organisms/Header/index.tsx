import React from 'react';
// import { useSelector } from 'react-redux';
// import { selectUser } from '../../features/userSlice';
import Link from 'next/link';
import LibraryAddIcon from '@material-ui/icons/LibraryAdd';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import SearchIcon from '@material-ui/icons/Search';
import { Emoji } from 'emoji-mart';

export const Header: React.FC = () => {
  const user = useSelector(selectUser);
  const createLink = `${user.uid}/create-list`;
  const searchLink = `/search-list`;
  const bookmarkLink = `${user.uid}/bookmark-list`;

  return (
    <div className='bg-sub-color flex h-16 items-center justify-evenly'>
      <Link href='/'>
        <h3 className='text-2xl font-bold'>Food Invite</h3>
      </Link>

      {user.uid ? (
        <Link href={createLink}>
          <LibraryAddIcon fontSize='large' />
        </Link>
      ) : (
        <div className=''>
          <Emoji emoji='knife_fork_plate' size={32} />
        </div>
      )}

      {user.uid ? (
        <Link href={searchLink}>
          <SearchIcon fontSize='large' />
        </Link>
      ) : (
        <div className=''>
          <Emoji emoji='male-cook' size={32} />
        </div>
      )}

      {user.uid ? (
        <Link href={bookmarkLink}>
          <BookmarkIcon fontSize='large' />
        </Link>
      ) : (
        <div className=''>
          <Emoji emoji='yum' size={32} />
        </div>
      )}
    </div>
  );
};
