/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable @next/next/no-img-element */
import firebase from 'firebase/app';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

type ListContentCardProps = {
  restaurantId: string;
  username: string;
  timestamp?: firebase.firestore.FieldValue;
  imageurl: string;
  memo?: string;
  url?: string;
  name: string;
};

const ListContentCard: React.FC<ListContentCardProps> = (props) => {
  const router = useRouter();
  const { uid, listId } = router.query;

  return (
    <div className='overflow-hidden m-4 h-48 rounded-lg xl:m-6 xl:h-60'>
      <Link href={`/users/${uid}/lists/${listId}/restaurant/${props.restaurantId}`} passHref>
        <div>
          <div className='grid justify-items-center items-center h-36 bg-gray-200 xl:h-48'>
            <img
              src={props.imageurl}
              alt='food-image'
              className='object-cover w-full h-36 xl:h-48'
            />
          </div>
          <div className='grid justify-items-center items-center h-12 text-center bg-gray-200 xl:h-12'>
            <p className='text-base'>{props.name}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ListContentCard;
