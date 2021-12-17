import TextField from '@material-ui/core/TextField';
import { Picker } from 'emoji-mart';
import React from 'react';
import 'emoji-mart/css/emoji-mart.css';
import { Headline } from '../../../../components/atoms/Headline';
import Layout from '../../../../components/templates/layout';
import { useCreateList } from '../../../../hooks/useCreateList';

const CreateList: React.FC = () => {
  const { createList, setListName, setEmojiName, user, listName } = useCreateList();

  return (
    <Layout>
      <main className='flex flex-col bg-main-color'>
        <div className='py-4'>
          <Headline headline='リストを作成' />
        </div>
        <form onSubmit={createList} className='pl-5 '>
          <TextField
            label='リスト名'
            placeholder='行きたい飲食店リスト'
            multiline
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
              className={
                listName ? 'bg-sub-color p-2 rounded-2xl' : 'text-gray-300 p-2 rounded-2xl '
              }
            >
              リスト作成
            </button>
          </div>
        </form>
      </main>
    </Layout>
  );
};

export default CreateList;
