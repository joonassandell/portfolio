import Title from '../../components/Title';
import { motion } from 'framer-motion';

export default function Oras() {
  return (
    <>
      <Title title="Oras" />
      <motion.div
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <h2>oras</h2>
      </motion.div>
    </>
  )
}

export async function getStaticProps(context) {
  return {
    props: {
      navTitle: 'Oras'
    }, 
  }
}