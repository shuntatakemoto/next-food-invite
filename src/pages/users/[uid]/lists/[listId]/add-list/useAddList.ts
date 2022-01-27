import firebase from 'firebase/app';
import { Params } from 'next/dist/server/router';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { storage, db } from '@/libs/firebase';
import { selectUser } from '@/store/user';

export const useAddList = () => {
  const user = useSelector(selectUser);
  const router = useRouter();
  const { uid, listId } = router.query as Params;

  const [uploadImage, setUploadImage] = useState<File | null>(null);
  const [name, setName] = useState('');
  const [memo, setMemo] = useState('');
  const [restaurantUrl, setRestaurantUrl] = useState('');
  const [fileUrl, setFileUrl] = useState<string | undefined>(undefined);

  const onChangeImageHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      setUploadImage(e.target.files?.[0]);
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
      const uploadImg = storage.ref(`${uid}/${fileName}`).put(uploadImage);
      uploadImg.on(
        firebase.storage.TaskEvent.STATE_CHANGED,
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        () => {},
        (err) => {
          alert(err);
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
