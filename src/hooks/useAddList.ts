import React, { useState } from 'react';
import firebase from 'firebase/app';
import { storage, db } from '../libs/firebase';
import { useSelector } from 'react-redux';
import { selectUser } from '../store/user';
import { useRouter } from 'next/router';

export const useAddList = () => {
  const user = useSelector(selectUser);
  const router = useRouter();
  const { uid, listId }: any = router.query;

  const [uploadImage, setUploadImage] = useState<File | null>(null);
  const [name, setName] = useState('');
  const [memo, setMemo] = useState('');
  const [restaurantUrl, setRestaurantUrl] = useState('');
  const [fileUrl, setFileUrl] = useState<string>('');

  const onChangeImageHandler = (e: { target: { files: any[]; value: string } }) => {
    if (e.target.files![0]) {
      setUploadImage(e.target.files![0]);
      const imageFile = e.target.files[0];
      const imageUrl = URL.createObjectURL(imageFile);
      setFileUrl(imageUrl);
      e.target.value = '';
    }
  };

  const addList = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (uploadImage) {
      const S = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
      const N = 16;
      const randomChar = Array.from(crypto.getRandomValues(new Uint32Array(N)))
        .map((n) => S[n % S.length])
        .join('');
      const fileName = randomChar + '_' + uploadImage.name;
      const uploadTweetImg = storage.ref(`${uid}/${fileName}`).put(uploadImage);
      uploadTweetImg.on(
        firebase.storage.TaskEvent.STATE_CHANGED,
        () => {},
        (err) => {
          alert(err.message);
        },
        async () => {
          await storage
            .ref(uid)
            .child(fileName)
            .getDownloadURL()
            .then(async (url) => {
              db.collection('users')
                .doc(uid)
                .collection('lists')
                .doc(listId)
                .collection('restaurant')
                .add({
                  imageurl: url,
                  name: name,
                  memo: memo,
                  url: restaurantUrl,
                  timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                  username: user.displayName,
                });
            });
        },
      );
    } else {
      db.collection('users').doc(uid).collection('lists').doc(listId).collection('restaurant').add({
        name: name,
        memo: memo,
        url: restaurantUrl,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        username: user.displayName,
      });
    }
    setUploadImage(null);
    setName('');
    setMemo('');
    setRestaurantUrl('');
    router.replace(`/users/${uid}/lists/${listId}`);
  };

  return {
    user,
    addList,
    setName,
    uploadImage,
    onChangeImageHandler,
    fileUrl,
    memo,
    setMemo,
    restaurantUrl,
    setRestaurantUrl,
    name,
  };
};
