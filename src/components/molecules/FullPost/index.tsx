import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import { Emoji } from 'emoji-mart';
import firebase from 'firebase/app';
import Link from 'next/link';
import React from 'react';
import { db } from '@/libs/firebase';

export type FullPostProps = {
  id?: string;
  uid: string;
  listId: string;
  listname: string;
  username: string;
  timestamp?: firebase.firestore.FieldValue;
  emojiname: string;
  listurl?: string;
  isBookmarkPage: boolean;
};

const FullPost: React.FC<FullPostProps> = (props) => {
  const emojiName = props.emojiname;

  const deleteBookmark = () => {
    db.collection('users')
      .doc(props.uid)
      .collection('bookmark')
      .doc(props.id)
      .delete()
      .then(() => {
        console.log('Document successfully deleted!');
      })
      .catch((error) => {
        console.error('Error removing document: ', error);
      });
  };

  return (
    <div className='overflow-hidden m-4 h-48 rounded-lg xl:m-6 xl:h-60'>
      {props.isBookmarkPage ? (
        <div className='bg-gray-200'>
          <div className='grid justify-end items-center'>
            <button onClick={deleteBookmark} className='h-8'>
              <HighlightOffIcon />
            </button>
          </div>
          <Link href={`${props.listurl}`} passHref>
            <div>
              <div className='grid justify-items-center items-center h-28 xl:h-40'>
                <Emoji emoji={emojiName} size={64} set='twitter' />
              </div>
              <div className='grid justify-items-center items-center h-12 text-center xl:h-12'>
                <p className='text-base'>{props.listname}</p>
              </div>
            </div>
          </Link>
        </div>
      ) : (
        <Link href={`/users/${props.uid}/lists/${props.listId}`} passHref>
          <div className='bg-gray-200'>
            <div className='grid justify-items-center items-center h-36 xl:h-48'>
              <Emoji emoji={emojiName} size={64} set='twitter' />
            </div>

            <div className='grid justify-items-center items-center h-12 text-center xl:h-12'>
              <p className='text-base'>{props.listname}</p>
            </div>
          </div>
        </Link>
      )}
    </div>
  );
};
export default FullPost;
