import firebase from 'firebase/app';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { db } from '../libs/firebase';
import { selectUser } from '../store/user';
import 'emoji-mart/css/emoji-mart.css';

export const useCreateList = () => {
  const user = useSelector(selectUser);
  const router = useRouter();
  const [listName, setListName] = useState('');
  const [emojiName, setEmojiName] = useState('');
  const newEmojiName = emojiName.replace(/\"/g, '');

  const createList = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    db.collection('users').doc(user.uid).collection('lists').add({
      avatar: user.photoUrl,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      username: user.displayName,
      listname: listName,
      emojiname: newEmojiName,
      userid: user.uid,
      twitterid: user.twitterUid,
    });
    setListName('');
    setEmojiName('');
    router.replace('/');
  };
  return {
    createList,
    user,
    listName,
    emojiName,
    setListName,
    setEmojiName,
  };
};
