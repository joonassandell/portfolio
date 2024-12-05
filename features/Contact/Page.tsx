import { APP } from '@/lib/config'
import { ArrowRight, Check, Copy } from '@/components/Icon'
import { Button } from '@/components/Button'
import { Head } from '@/components/Head'
import { Heading } from '@/components/Heading'
import { Link } from '@/components/Link'
import { LINK, SITEMAP } from '@/lib/sitemap'
import { SomeIcons } from '@/components/SomeIcons'
import { Template, TemplateArea } from '@/components/Template'
import { Text } from '@/components/Text'
import { TextReveal } from '@/components/TextReveal'
import { useCopyToClipboard } from 'react-use'
import { useParallax } from '@/lib/useParallax'
import { useSetThemeColor } from '@/components/App'
import { useState } from 'react'

export const ContactPage = () => {
  const { id, meta } = SITEMAP.contact
  useSetThemeColor(meta.themeColor)
  const [, copyToClipboard] = useCopyToClipboard()
  const [icon, setIcon] = useState(<Copy />)
  const { value: x } = useParallax({ offset: 'start-start' })

  const handleCopy = () => {
    copyToClipboard(APP.person.email)
    setIcon(<Check />)
    setTimeout(() => setIcon(<Copy />), 2000)
  }

  return (
    <Template id={id}>
      <Head {...meta} />
      <TemplateArea grid={false}>
        <Heading
          className="white-space:nowrap mb:0"
          size="xl"
          style={{ x }}
          tag="h1"
        >
          <TextReveal aria-hidden text={['Get in touch ✳︎ Get in touch']} />
          <span className="hideVisually">Get in touch</span>
        </Heading>
      </TemplateArea>
      <TemplateArea className="pt:2xl@l" gridRowGap="l" pb="2xl-5xl" pt="m">
        <div className="grid-col grid-col:8@m grid-col:6@l grid-col:5@xl">
          <Text animate size="l">
            <p>
              I enjoy connecting with new people online and participating in
              events. The easiest way to reach me is via email but alternatively
              feel free to send me a message through{' '}
              <Link href={LINK.twitter.url}>Twitter</Link>.
            </p>
            <p className="flex flex-wrap:wrap flex-direction:column flex-direction:row@s gap">
              <Button
                disabled={icon.type.name != Copy.name}
                icon={icon}
                onClick={handleCopy}
                variant="primary"
              >
                Copy e-mail
              </Button>
              <Button href={LINK.twitter.url} icon={<ArrowRight />}>
                Send me a DM
              </Button>
            </p>
          </Text>
        </div>
        <div className="grid-col grid-col:6@l">
          <Text animate>
            <p className="mb:2xs">On social platforms</p>
            <p className="color:mute">Let's connect and get in touch 👋</p>
            <SomeIcons />
          </Text>
        </div>
      </TemplateArea>
    </Template>
  )
}
