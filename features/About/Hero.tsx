import { Figure } from '@/components/Figure'
import { Heading } from '@/components/Heading'
import { MQ } from '@/lib/config'
import { TextReveal } from '@/components/TextReveal'
import { useParallax } from '@/lib/useParallax'
import lineCube from '@/public/common/decoration/line-cube.png'
import profile from '@/public/common/joonassandell/joonassandell-portrait-studio.png'

export const AboutHero = () => {
  const { ref, value: x } = useParallax({ offset: 'start-start' })

  return (
    <>
      <div className="Template-heading wrap pr:0">
        <Heading
          aria-hidden
          className="white-space:nowrap mb:0"
          size="xl"
          style={{ x }}
          tag="div"
        >
          <TextReveal text={["Hello ✳︎ Moro ✳︎ Hi ✳︎ What's up?"]} />
        </Heading>
      </div>
      <div className="Template-figure grid" ref={ref}>
        <div className="grid-col grid-col:10 -start:3 grid-col:6@m -start:7@m">
          <Figure
            alt="Joonas Sandell profile"
            borderRadius={false}
            priority
            quality={90}
            scroll="mask"
            scrollImageSpeed="fastest"
            scrollOffset="start-start"
            sizes={`${MQ.s} 50vw, 80vw`}
            transition="clip"
            {...profile}
          />
          <Figure
            alt="Line cube"
            aria-hidden
            borderRadius={false}
            className="Template-cube"
            placeholder={false}
            priority
            scroll
            scrollOffset="start-start"
            scrollSpeed="fast"
            sizes="33vw"
            {...lineCube}
          />
        </div>
      </div>
    </>
  )
}
