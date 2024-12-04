import { type AppHeadProps, useApp, useSetThemeColor } from '@/components/App'
import { BiocodeHero } from '@/features/Work/Biocode'
import { HomeAbout } from './'
import { type LinkEvent } from '@/types'
import { MediasignalHero } from '@/features/Work/Mediasignal'
import { MoreWorkHero } from '@/features/Work/MoreWork'
import { OrasHero } from '@/features/Work/Oras'
import { SandboxHero } from '@/features/Work/Sandbox'
import { SITEMAP, type SitemapWithoutArrayKeys } from '@/lib/sitemap'
import { Template } from '@/components/Template'
import { useLenis } from 'lenis/react'
import { useScrollTo } from '@/lib/useScrollTo'
import { useState } from 'react'
import c from 'clsx'

export const HomePage = () => {
  const { id, meta } = SITEMAP.home
  useSetThemeColor(meta.themeColor)
  const scrollTo = useScrollTo({
    lock: true,
    offset: undefined,
    stopOnComplete: true,
  })
  const lenis = useLenis()
  const {
    detect: { isIos },
    lockTemplate,
    setThemeColor,
    setTransition,
    setTransitionInitial,
  } = useApp()
  const [animation, setAnimation] = useState(false)
  const [extraSpace, setExtraSpace] = useState(false)
  const [currentHero, setCurrentHero] = useState<SitemapWithoutArrayKeys>()

  const lockIos = (el: HTMLElement) => {
    if (!isIos) return
    const els = el.querySelectorAll('[data-lock-ios]')
    els.forEach(el => el.classList.add('transform-none'))
  }

  const handleClick = (e: LinkEvent) => {
    e.preventDefault()
    setTransition(true)
    setTransitionInitial(false)

    const el = e.currentTarget.closest('[id]') as HTMLElement

    const needsExtraSpace = lenis && lenis?.limit < el?.offsetTop
    if (needsExtraSpace) {
      setExtraSpace(true)
      lenis?.resize()
    }

    setThemeColor(el.dataset.themeColor as AppHeadProps['themeColor'])
    setCurrentHero(el.id as SitemapWithoutArrayKeys)
    setAnimation(true)

    setTimeout(
      () => {
        scrollTo(el, () => {
          setTimeout(() => {
            lockIos(el)
            lockTemplate()
          }, 0)
        })
      },
      needsExtraSpace ? 350 : 0,
    )
  }

  return (
    <Template
      className={c({ 'is-extraSpace': extraSpace })}
      footerProps={{ border: false }}
      id={id}
      variant="unstyled"
    >
      <HomeAbout />
      <div className="Template-heros" id="selected-works">
        <BiocodeHero
          onClick={handleClick}
          transition="pre"
          transitionStart={currentHero === 'biocode' && animation}
        />
        <OrasHero
          onClick={handleClick}
          transition="pre"
          transitionStart={currentHero === 'oras' && animation}
        />
        <MediasignalHero
          onClick={handleClick}
          transition="pre"
          transitionStart={currentHero === 'mediasignal' && animation}
        />
        <MoreWorkHero
          onClick={handleClick}
          transition="pre"
          transitionStart={currentHero === 'moreWork' && animation}
        />
        <SandboxHero
          onClick={handleClick}
          transition="pre"
          transitionStart={currentHero === 'sandbox' && animation}
        />
      </div>
    </Template>
  )
}
