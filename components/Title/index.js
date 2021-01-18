import Head from "next/head";

export default function Title({ title }) {
  return (
    <Head>
      <title>{`Joonas Sandell${title ? " — " + title : ""}`}</title>
    </Head>
  );
}
