import { Heading } from '@/components/Heading'
import { Hr } from '@/components/Hr'
import { Subtitle } from '@/components/Subtitle'
import { TemplateArea } from './TemplateArea'
import { type TemplateSectionHeaderProps } from './'
import { Text } from '@/components/Text'
import c from 'clsx'

export const TemplateSectionHeader = ({
  center,
  children,
  heading,
  mute,
  rows,
  subtitle,
  ...props
}: TemplateSectionHeaderProps) => (
  <>
    <TemplateArea grid={false} pt="2xl-5xl" {...props}>
      {subtitle && (
        <Subtitle animate center={center}>
          {subtitle}
        </Subtitle>
      )}
      <Heading animate center={center} size="h1" tag="h2">
        {heading}
      </Heading>
      <Text
        animate
        balance
        center={center}
        className="mb:0"
        color={mute ? 'mute' : undefined}
        size="l"
        tag="p"
      >
        {children}
      </Text>
    </TemplateArea>
    {rows && (
      <TemplateArea gridGap="m" gridRowGap="m" pt={center ? 'l-2xl' : 'l'}>
        {rows.map(({ heading, text }, i) => (
          <div className="grid-col grid -gap:row:0" key={i}>
            {i === 0 && (
              <Hr
                animate
                className={c('grid-col mb:l', {
                  'mb:2xl@l': center,
                })}
              />
            )}
            <Heading
              animate
              className="grid-col grid-col:4@s grid-col:5@m grid-col:7@l mb:xs"
              size="h5"
              tag="h3"
            >
              {heading}
            </Heading>
            <Text
              animate
              className="grid-col grid-col:8@s grid-col:7@m grid-col:5@l mb:0"
              color={mute ? 'mute' : undefined}
              tag="p"
            >
              {text}
            </Text>
          </div>
        ))}
      </TemplateArea>
    )}
  </>
)
