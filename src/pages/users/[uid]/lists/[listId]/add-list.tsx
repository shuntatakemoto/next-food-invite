import React from 'react';
import AddPhotoIcon from '@material-ui/icons/AddAPhoto';
import TextField from '@material-ui/core/TextField';
import { useAddList } from '../../../../../hooks/useAddList';
import { Headline } from '../../../../../components/atoms/Headline';
import firebase from 'firebase/app';

type AddListProps = {
  postId: string;
  avatar: string;
  image: string;
  username: string;
  timestamp: firebase.firestore.FieldValue;
};

const AddList: React.FC<AddListProps> = () => {
  const {
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
  } = useAddList();

  return (
    <main className='flex flex-col bg-main-color'>
      <div className='py-4'>
        <Headline headline='店を追加' />
      </div>
      <form onSubmit={addList} className='px-10 xl:w-1/4 flex-1'>
        <div>
          <TextField
            label='店名'
            placeholder='店名を入力'
            multiline
            fullWidth
            margin='normal'
            value={name}
            onChange={(e) => setName(e.target.value)}
            className='mt-5'
          />

          <div className='mt-5'>
            <label htmlFor='addPhoto'>
              <span className='pr-5'>画像があれば選択</span>
              <AddPhotoIcon
                className={
                  uploadImage ? 'bg-sub-color cursor-pointer' : 'text-gray-300 cursor-pointer'
                }
              />
              <input className='hidden' id='addPhoto' type='file' onChange={onChangeImageHandler} />
            </label>
            {/* プレビュー画像を表示 */}
            <div className='w-3/4 xl:w-2/5'>
              <img src={fileUrl}></img>
            </div>
          </div>

          <TextField
            label='メモ'
            placeholder='メモを入力'
            multiline
            fullWidth
            margin='normal'
            value={memo}
            onChange={(e) => setMemo(e.target.value)}
            className='mt-5'
          />

          <TextField
            label='URL'
            placeholder='店情報のあるURLを入力'
            multiline
            fullWidth
            margin='normal'
            value={restaurantUrl}
            onChange={(e) => setRestaurantUrl(e.target.value)}
            className='mt-5'
          />
        </div>
        <div className='mt-5'>
          <button
            type='submit'
            disabled={!name}
            className={
              name ? 'bg-sub-color p-2 rounded-2xl mb-5' : 'text-gray-300 p-2 rounded-2xl mb-5'
            }
          >
            作成
          </button>
        </div>
      </form>
    </main>
  );
};

export default AddList;