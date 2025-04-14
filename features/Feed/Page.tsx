import { FeedItem, type PageProps } from './'
import { Head } from '@/components/Head'
import { Heading } from '@/components/Heading'
import { SITEMAP } from '@/lib/sitemap'
import { Template, TemplateArea } from '@/components/Template'
import { Text } from '@/components/Text'
import { useMasonry } from '@/lib/useMasonry'
import { useSetThemeColor } from '@/components/App'
import React from 'react'

export const FeedPage = ({ data }: PageProps) => {
  const { id, meta } = SITEMAP.feed
  useSetThemeColor(meta.themeColor)
  const masonry = useMasonry()

  return (
    <Template id={id}>
      <Head {...meta} />
      <TemplateArea>
        <div className="grid-col grid-col:9@m grid-col:6@l">
          <Heading size="h1">Feed</Heading>
          <Text color="mute" size="l">
            <p>
              A visual journal of what I’m currently working on, from quick
              shots and ideas to ongoing projects.
            </p>
          </Text>
        </div>
      </TemplateArea>
      <TemplateArea
        className="Template-grid pt:2xl@l"
        grid={false}
        pb="2xl-5xl"
        pt="l"
        ref={masonry}
      >
        {data.map((item, i) => (
          <FeedItem
            {...item}
            image={{
              priority: i === 0 ? true : false,
              ...item.image,
            }}
            key={item.image.src}
          />
        ))}
      </TemplateArea>
    </Template>
  )
}
