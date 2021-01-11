import Link from 'next/link';
import { useRouter } from 'next/router';
import s from './index.module.scss';
import c from 'classnames';
import { headerAnim as anim } from '../../lib/config';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header(props) {
  const router = useRouter();

  const NavItem = (props) => {
    return (
      <li className={c(s['Header-nav-list-item'], {
        'is-active': router.pathname === props.href,
      })}>
        <Link href={props.href}>{props.name}</Link>
      </li>
    )
  }

  return (
    <header className={s.Header}>
      <motion.div
        animate={{ 
          opacity: 1,
          y: 0,
        }}
        initial={{ 
          opacity: 0,
          y: -24,
        }}
      >
      <div className={`${s['Header-wrap']} wrap`}>
        <div className={`${s['Header-name']}`}>
          Joonas Sandell
        </div>
        <nav className={s['Header-nav']}>
            <div className={s['Header-nav-button']}>
              <AnimatePresence initial={false} exitBeforeEnter>
                <motion.div
                  key={router.route}
                  className={s['Header-nav-button-active']}
                  {...anim.navButtonActive}
                >
                  {props.navTitle}
                </motion.div>
              </AnimatePresence>
            </div>
            <ul className={s['Header-nav-list']}>
              <NavItem name="Selected works" href="/" />
              <NavItem name="Oras" href="/projects/oras" />
            </ul>
          </nav>
      </div>
      </motion.div>
    </header>
  )
}
