import firebase from 'firebase/app';
import 'firebase/storage';

export const saveOgp = async (dataURL: string, listId: string) => {
  const strageRef = firebase.storage().ref();
  const ogpRef = strageRef.child(`${listId}`);
  return ogpRef
    .putString(dataURL, 'data_url')
    .then(() => {})
    .catch((e) => {
      console.log('Error' + e);
    });
};
