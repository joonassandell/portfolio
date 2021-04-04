import { useEffect, useState } from 'react';

import { OrasHero } from '../containers/Oras';
import { Template } from '../containers/Template';
import c from 'classnames';
import { getSitemap } from '../lib/utility';
import { motion } from 'framer-motion';
import { transPrimary } from '../lib/config';

const oras = getSitemap('oras');

export default function Oras() {
  return (
    <Template name={oras.id} title={oras.title}>
      <div data-scroll-section>
        <OrasHero />
        <div data-id="mummu" style={{ height: '200vh', background: 'white' }} />
      </div>
    </Template>
  );
}

export async function getStaticProps() {
  return {
    props: {
      navTitle: oras.title,
    },
  };
}
