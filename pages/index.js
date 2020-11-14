import Head from 'next/head';
import s from '../components/Template/Home/index.module.scss';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <>
      <Head>
        <title>Joonas Sandell — Portfolio</title>
      </Head>
      <motion.div exit="exit">
        <div className={s.Home}>
          <section className={s['Home-oras']}>
            <div className={s['Home-oras-figure']}>
              <img src="/images/oras/joonassandell-oras-faucet.png" alt="Oras faucet" />
            </div>
            <div className={s['Home-oras-bg']}>
            </div>
          </section>
        </div>
      </motion.div>
    </>
  )
}

export async function getStaticProps(context) {
  console.log(context);
  return {
    props: {
      navTitle: 'Selected works'
    }, 
  }
}
