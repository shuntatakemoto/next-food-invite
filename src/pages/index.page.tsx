import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import React from 'react';
import { Button } from '../components/atoms/Button';
import Layout from '../components/templates/layout';
import { useJudgeLogin } from '../hooks/useJudgeLogin';
import { auth, provider } from '../libs/firebase';

const Home: NextPage = () => {
  useJudgeLogin();

  const signInTwitter = async () => {
    await auth.signInWithPopup(provider).catch((err) => alert(err.message));
  };

  return (
    <>
      <Head>
        <title>Food Invite</title>
        <meta name='description' content='知り合いと外食に行きやすくなるアプリ' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Layout>
        <main className='bg-main-color'>
          <div className='pt-16 text-center md:flex'>
            <div className='md:flex md:justify-end md:pr-8 md:w-1/2'>
              <div>
                <h2 className='py-4 text-5xl font-bold md:pt-20'>Food Invite</h2>
                <p className=''>知り合いと外食に行きやすくなるアプリ</p>
              </div>
            </div>
            <div className='py-8 md:flex md:justify-start md:pl-16 md:m-auto md:w-1/2'>
              <Image src='/fi-logo.png' alt='food-image' width='160' height='160' />
            </div>
          </div>

          <div className='py-8 text-center md:py-28'>
            <p className='m-4'>サービスを利用するにはTwitterでログインが必要です。</p>
            <Button
              label='Sign In with Twitter'
              onClick={signInTwitter}
              backgroundColor='#EEE8AA'
            />
          </div>

          <div className='pt-12'>
            <p className='px-4 text-3xl font-bold underline md:px-12'>このアプリは何？</p>
            <div className='md:flex'>
              <Image
                src='/explanation-slide-1.jpeg'
                alt='food-image'
                width='1920'
                height='1080'
                loading='lazy'
              />
              <Image
                src='/explanation-slide-2.jpeg'
                alt='food-image'
                width='1920'
                height='1080'
                loading='lazy'
              />
            </div>
            <div className='md:flex'>
              <Image
                src='/explanation-slide-3.jpeg'
                alt='food-image'
                width='1920'
                height='1080'
                loading='lazy'
              />
              <Image
                src='/explanation-slide-4.jpeg'
                alt='food-image'
                width='1920'
                height='1080'
                loading='lazy'
              />
            </div>
          </div>

          <div className='px-4 pt-16 md:px-12 md:pt-28'>
            <p className='text-3xl font-bold underline'>なんでつくったの？</p>
            <div className='py-8'>
              <p>友達と外食の際、食べに行く店がなかなか決まらない</p>
              <br />
              <p>
                Twitter
                で『今日の夜ご飯行きませんか？』とつぶやいて誰からもリプがなかったら悲しい＆誰かがリプしていたらもう追加でリプしにくい
              </p>
              <br />
              <p>
                Twitter でフォローし合っているがあまり親交がない人と一緒にご飯に行って話を聞きたい
              </p>
              <br />
              <p>
                外食の際、食べログで上位の店に行くのではなく、知り合いがお勧めする店に行きたい＆知り合いのおすすめの店を知りたい
              </p>
              <br />
              <p>上記の問題を解決するため開発しました</p>
            </div>
          </div>

          <div className='py-8 text-center md:pt-28'>
            <p className='pb-4'>ソースコード⬇︎</p>
            <a href='https://github.com/shuntatakemoto/next-food-invite'>
              <Button label='Githubを開く' />
            </a>
            <p className='pt-4'>
              作成者:
              <a href='https://twitter.com/haruta_8_'>&nbsp;@haruta_8_</a>
            </p>
          </div>
        </main>
      </Layout>
    </>
  );
};

export default Home;
