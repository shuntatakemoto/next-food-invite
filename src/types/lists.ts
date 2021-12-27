import firebase from 'firebase/app';

export type Lists = {
  avatar: string;
  id: string;
  listname: string;
  username: string;
  timestamp?: firebase.firestore.FieldValue;
  emojiname: string;
}[];
