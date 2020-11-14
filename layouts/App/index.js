import Head from 'next/head';
import style from './App.module.scss';

export default function App(props) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      </Head>
      <div className={style.App}>
        {props.children}
      </div>
    </>
  )
}