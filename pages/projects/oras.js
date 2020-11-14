import Head from 'next/head';
import App from '../../layouts/App';
import { motion } from 'framer-motion';

export default function Oras() {
  return (
    <motion.div
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h1>Oras</h1>
    </motion.div>
  )
}

export async function getStaticProps(context) {
  return {
    props: {
      navTitle: 'Oras'
    }, 
  }
}