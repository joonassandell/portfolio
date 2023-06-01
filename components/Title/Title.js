import Head from 'next/head';

export const Title = ({ title }) => {
  return (
    <Head>
      <title>{`Joonas Sandell${title ? ' — ' + title : ''}`}</title>
    </Head>
  );
};
