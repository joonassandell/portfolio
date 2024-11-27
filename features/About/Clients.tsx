import { Figure } from '@/components/Figure'
import { Heading } from '@/components/Heading'
import { Hr } from '@/components/Hr'
import { MQ } from '@/lib/config'
import { TemplateArea } from '@/components/Template'
import { Text } from '@/components/Text'
import { TextReveal } from '@/components/TextReveal'
import lineBall from '@/public/images/line-ball.png'

export const AboutClients = () => (
  <TemplateArea className="Template-clients" id="clients" pt="2xl-5xl">
    <Figure
      alt="Line ball"
      aria-hidden
      borderRadius={false}
      className="Template-ball"
      placeholder={false}
      scroll
      sizes={`${MQ.m} 30vw, 40vw`}
      {...lineBall}
    />
    <div className="grid-col grid-col:7@s -start:6@s grid-col:6@m -start:7@m">
      <Hr className="mb:ml" />
      <Heading size="h3">
        <TextReveal text={['My clients']} />
      </Heading>
      {/* prettier-ignore */}
      <Text animate>
        Anton&Anton,
        Biocode,
        Bonnier Books (Academic bookstore),
        Caverion,
        City of Tampere,
        Coxa,
        Dahl,
        Ekovilla,
        Enervent,
        Fair Trade,
        Finefoods,
        Finnpark,
        Hailia,
        Hankkija,
        Hansa,
        Himos Festivals,
        HK Scan,
        Holiday Club,
        Hotelzon,
        Huhtahyvät,
        HW-Company,
        Jatke,
        Jollas,
        Katepal,
        Kesla,
        Luke,
        Mediasignal,
        NCC,
        Omoroi,
        Oras,
        Paunu,
        SEY,
        SOS-Lapsikylä,
        TAKK,
        Ursa,
        Valio,
        Vapriikki,
        Vöner,
        YIT,
        VR Group
      </Text>
    </div>
  </TemplateArea>
)
