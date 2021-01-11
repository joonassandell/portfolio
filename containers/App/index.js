import Head from 'next/head';
import { SmoothScrollProvider } from '../../lib/SmoothScroll';

export default function App(props) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <script dangerouslySetInnerHTML={{ __html: `
          const html = document.documentElement;
          html.className = html.className.replace(/(^|\s)no-js(\s|$)/,'has-js');
        `}} />
      </Head>
      <main data-scroll-container className='App'>
        {props.children}
      </main>
    </>
  )
}