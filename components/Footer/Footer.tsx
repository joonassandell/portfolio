import { APP, BUILD_DATE, GIT_COMMIT_SHA } from '@/lib/config'
import { Badge } from '../Badge'
import { type FooterProps } from './'
import { formatDate, formatDateYear } from '@/lib/utils'
import { LINK, SITEMAP } from '@/lib/sitemap'
import { Link } from '@/components/Link'
import { LinkRoll } from '@/components/LinkRoll'
import { Text } from '@/components/Text'
import c from 'clsx'

export const Footer = ({ border = true, fullWidth }: FooterProps) => (
  <footer
    className={c('Footer wrap user-select:none', { '-width:full': fullWidth })}
  >
    <div className={c('Footer-inner', { 'border:0': !border })}>
      <div className="Footer-main">
        <div className="grid -gap:column:0">
          <div className="grid-col grid-col:9@l grid">
            <div className="grid-col grid-col:6 grid-col:3@m">
              <Text className="mb:xs mb@m" color="mute:blend" tag="p">
                Me
              </Text>
              <Text tag="ul">
                {SITEMAP.me.map(item => {
                  return (
                    <li key={item.id}>
                      <LinkRoll href={item.url} underline="active">
                        {item.title}
                      </LinkRoll>
                    </li>
                  )
                })}
              </Text>
            </div>
            <div className="grid-col grid-col:6 grid-col:3@m">
              <Text className="mb:xs mb@m" color="mute:blend" tag="p">
                Projects
              </Text>
              <Text tag="ul">
                {SITEMAP.projects.map(item => {
                  return (
                    <li key={item.id}>
                      <LinkRoll href={item.url} underline="active">
                        {item.title}
                      </LinkRoll>
                    </li>
                  )
                })}
              </Text>
            </div>
            <div className="grid-col grid-col:6 grid-col:3@m">
              <Text className="mb:xs mb@m" color="mute:blend" tag="p">
                Case Studies
              </Text>
              <Text tag="ul">
                {SITEMAP.work.map(item => {
                  return (
                    <li
                      className={c({
                        'flex gap:xs align-items:center': item.new,
                      })}
                      key={item.id}
                    >
                      <LinkRoll href={item.url} underline="active">
                        {item.title}
                      </LinkRoll>
                      {item.new && <Badge beacon>New</Badge>}
                    </li>
                  )
                })}
              </Text>
            </div>
            <div className="grid-col grid-col:6 grid-col:3@m">
              <Text className="mb:xs mb@m" color="mute:blend" tag="p">
                Socials
              </Text>
              <Text tag="ul">
                {LINK.social.map(item => {
                  return (
                    <li key={item.title}>
                      <LinkRoll href={item.url}>{item.title}</LinkRoll>
                    </li>
                  )
                })}
              </Text>
            </div>
          </div>
          <div className="Footer-nameCol grid-col grid-col:3@l">
            <Text className="mb:2xs mb@l" tag="p">
              {APP.person.name}
            </Text>
            <Text className="mb" color="mute:blend" size="s" tag="p">
              {APP.person.title.design}
              <span className="hidden@l">, </span>
              <br className="visible@l" />
              {APP.person.title.developer}
            </Text>
          </div>
        </div>
        <Text
          className="flex align-items:center justify-content:space-between"
          maxWidth={false}
          size="s"
        >
          <p className="Footer-updated mb:0">
            © {formatDateYear(new Date().toISOString())} {APP.person.name}
            <span className="color:mute:blend visible@s">
              {' '}
              ✳︎ Last updated:{' '}
              <Link
                href={
                  GIT_COMMIT_SHA
                    ? `${LINK.source.url}/commit/${GIT_COMMIT_SHA}`
                    : `${LINK.source.url}/commits`
                }
              >
                {formatDate(BUILD_DATE)}
              </Link>
            </span>
          </p>
          <Link href={LINK.source.url}>{LINK.source.title}</Link>
        </Text>
      </div>
    </div>
  </footer>
)
