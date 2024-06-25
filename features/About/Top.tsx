import { Figure } from '@/components/Figure';
import { Heading } from '@/components/Heading';
import { MQ, SCROLL_SPEED } from '@/lib/config';
import { TextReveal } from '@/components/TextReveal';
import lineCube from '@/public/images/line-cube.png';
import profile from '@/public/images/joonassandell-profile.png';

export const AboutTop = () => (
  <>
    <div className="Template-heading wrap pr:0">
      <Heading
        aria-hidden
        className="white-space:nowrap mb:0"
        data-s
        data-s-direction="horizontal"
        data-s-position="left"
        data-s-speed={SCROLL_SPEED}
        size="display"
        tag="div"
      >
        <TextReveal text={["Hello ✳︎ Moro ✳︎ Hi ✳︎ What's up?"]} />
      </Heading>
    </div>
    <div className="Template-figure grid">
      <div className="grid-col grid-col:10 -start:3 grid-col:6@m -start:7@m">
        <Figure
          alt="Joonas Sandell profile"
          borderRadius={false}
          priority
          quality={90}
          scroll="mask"
          scrollImageSpeed={-4}
          scrollPosition="top"
          sizes={`${MQ.s} 50vw, 80vw`}
          transition="clip"
          {...profile}
        />
        <Figure
          alt="Line cube"
          aria-hidden="true"
          borderRadius={false}
          className="Template-cube"
          placeholder={false}
          priority
          scroll
          scrollPosition="top"
          scrollSpeed={3}
          sizes="33vw"
          {...lineCube}
        />
      </div>
    </div>
  </>
);
