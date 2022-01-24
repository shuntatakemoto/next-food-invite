import firebase from 'firebase';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { TwitterIcon } from 'react-share';
import { db, storage } from '@/libs/firebase';
import { selectUser } from '@/store/user';
import { User } from '@/types/user';

export type ProfileProps = {
  userInfo: User;
};

export const Profile: React.FC<ProfileProps> = (props) => {
  const user = useSelector(selectUser);
  const [profileImage, setProfileImage] = useState<File | null>(null);

  const onChangeImageHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      setProfileImage(e.target.files?.[0]);
      e.target.value = '';
    }
  };
  const changeProfile = async () => {
    let profileImageUrl = '';
    if (profileImage) {
      await storage.ref(`profiles/${user.uid}`).put(profileImage);
      profileImageUrl = await storage.ref('profiles').child(user.uid).getDownloadURL();
      await db.collection('users').doc(user.uid).update({
        newAvatar: profileImageUrl,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      });
    }
  };

  return (
    <div>
      {props.userInfo.newAvatar && (
        <Image
          src={props.userInfo.newAvatar.replace('normal', '200x200')}
          alt='profile image'
          className='rounded-3xl'
          width='160'
          height='160'
        />
      )}
      {!props.userInfo.newAvatar && props.userInfo.avatar && (
        <Image
          src={props.userInfo.avatar.replace('normal', '200x200')}
          alt='profile image'
          className='rounded-3xl'
          width='160'
          height='160'
        />
      )}
      <div className='flex'>
        <p className='text-2xl font-bold'>
          {props.userInfo.username ? props.userInfo.username : ''}
        </p>
        <Link href={`https://twitter.com/intent/user?user_id=${props.userInfo.twitterid}`} passHref>
          <div className='pl-4'>
            <TwitterIcon size={32} round={true} />
          </div>
        </Link>
      </div>
      <div className='pt-4'>
        {user.uid && profileImage && <button onClick={changeProfile}>変更する</button>}
        {user.uid == props.userInfo.userid && !profileImage && (
          <label htmlFor='addPhoto'>
            <span className='py-2 px-5 w-48 font-bold text-gray-600 bg-transparent rounded-full shadow-inner'>
              プロフィール画像変更
            </span>
            <input className='hidden' id='addPhoto' type='file' onChange={onChangeImageHandler} />
          </label>
        )}
      </div>
    </div>
  );
};
