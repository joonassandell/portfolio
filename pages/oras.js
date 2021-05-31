import { useEffect, useState, useRef } from 'react';

import { OrasHero } from '../containers/Oras';
import { Template } from '../containers/Template';
import c from 'classnames';
import { getSitemap } from '../lib/utility';
import { motion, useAnimation } from 'framer-motion';
import {
  transPrimary,
  transTertiary,
  transPrimaryFast,
  transPrimaryFastest,
  transSecondary,
  transSecondaryFast,
  transSecondaryFastest,
} from '../lib/config';
import Link from '../components/Link';
import { useLocomotiveScroll } from 'react-locomotive-scroll';
import Info from '../components/Info';

const oras = getSitemap('oras');

const infoRulerVariants = {
  inView: {
    scaleX: 1,
    transition: transPrimary,
  },
  hidden: {
    scaleX: 0,
  },
};

const infoGridVariants = {
  inView: {
    transition: { staggerChildren: 0.1 },
  },
};

const infoGridCellVariants = {
  inView: {
    y: 0,
    opacity: 1,
    transition: transTertiary,
  },
  hidden: {
    opacity: 0,
    y: '5rem',
  },
};

export default function Oras() {
  return (
    <Template name={oras.id} title={oras.title}>
      <OrasHero />
      <Info
        client={{ name: oras.title, href: 'https://oras.com' }}
        employer={{ name: 'Mediasignal', href: 'https://mediasignal.fi/en' }}
        heading="Oras is a significant developer, manufacturer and marketer of kitchen and bathroom faucets. Each technical detail in the products is designed to promote the efficient use of water and energy. We we're asked to create an extensive web service solution for Europe’s leading faucet manufacturer."
        smallPrint="Made together with wonderful people at Mediasignal."
        text={
          <p>
            After several iterations the Oras brand was modernised entirely in
            connection with the web service overhaul. The web service was used
            to create a bold and distinct image of Oras and to strongly
            highlight the brand’s new promise.
          </p>
        }
        role={['UI/UX design', 'Web development', 'Concept strategy']}
        year="2016"
      />
      <div data-id="mummu" style={{ height: '70vh', background: 'white' }} />
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
