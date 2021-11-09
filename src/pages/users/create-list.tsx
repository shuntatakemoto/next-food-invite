import React, { useState } from 'react';
import firebase from 'firebase/app';
import { db } from '../../libs/firebase';
import { useSelector } from 'react-redux';
import { selectUser } from '../../store/user';
import 'emoji-mart/css/emoji-mart.css';
import { Picker } from 'emoji-mart';
import TextField from '@material-ui/core/TextField';
import { useRouter } from 'next/router';
import { Footer } from '../../components/organisms/Footer';
import { Header } from '../../components/organisms/Header';

const CreateList: React.FC = () => {
  const user = useSelector(selectUser);
  const router = useRouter();
  const [listName, setListName] = useState('');
  const [emojiName, setEmojiName] = useState('');
  const newEmojiName = emojiName.replace(/\"/g, '');

  const createList = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // db.collection(user.uid).add({
    db.collection('users').add({
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

  return (
    <main className='flex flex-col min-h-screen bg-main-color'>
      <Header isSignedIn={user.uid ? true : false} />
      <h3 className='text-2xl font-bold'>リストを作成</h3>
      <form onSubmit={createList} className='pl-5 '>
        <TextField
          label='リスト名'
          placeholder='行きたい飲食店リスト'
          multiline
          //   fullWidth
          margin='normal'
          value={listName}
          className='pr-5 pb-5 xl:w-1/4'
          onChange={(e) => setListName(e.target.value)}
        />

        <div className='pb-5'>
          <p className='pb-5'>絵文字を設定</p>
          <Picker set='twitter' onSelect={(emoji) => setEmojiName(JSON.stringify(emoji.id))} />
        </div>
        <div className='pb-5'>
          <button
            type='submit'
            disabled={!listName}
            className={listName ? 'bg-sub-color p-2 rounded-2xl' : 'text-gray-300 p-2 rounded-2xl '}
          >
            リスト作成
          </button>
        </div>
      </form>
      <Footer isSignedIn={user.uid ? true : false} />
    </main>
  );
};

export default CreateList;
