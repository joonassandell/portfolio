import Head from "next/head";

const Title = ({ title }) => {
  return (
    <Head>
      <title>{`Joonas Sandell${title ? " — " + title : ""}`}</title>
    </Head>
  );
};

export default Title;
