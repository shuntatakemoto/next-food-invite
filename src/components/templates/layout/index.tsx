import Head from 'next/head';
import { ReactNode } from 'react';
import { useSelector } from 'react-redux';
import { Footer } from '../../../components/organisms/Footer';
import { Header } from '../../../components/organisms/Header';
import { selectUser } from '../../../store/user';

type LayoutProps = {
  children?: ReactNode;
  title?: string;
  description?: string;
  image?: string;
};

const Layout = ({
  children,
  title = 'Food Invite',
  description = '知り合いをご飯に誘うハードルを下げることを目的としたアプリです',
  image = 'https://food-invite.vercel.app/default.png',
}: LayoutProps) => {
  const user = useSelector(selectUser);
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet='utf-8' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <meta name='description' content={`${description}`} />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content='@haruta_8_' />
        <meta name='twitter:creator' content='@haruta_8_' />
        <meta name='twitter:image' content={image} />
        <meta property='og:url' content='https://food-invite.vercel.app/' />
        <meta property='og:title' content={title} />
        <meta property='og:description' content={description} />
        <meta property='og:image' content={image} />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className='flex flex-col min-h-screen bg-main-color'>
        <Header isSignedIn={user.uid ? true : false} uid={user.uid} />
        <main>{children}</main>
        <Footer isSignedIn={user.uid ? true : false} />
      </div>
    </>
  );
};

export default Layout;
