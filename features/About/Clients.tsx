import { Figure } from '@/components/Figure';
import { Heading } from '@/components/Heading';
import { Hr } from '@/components/Hr';
import { MQ } from '@/lib/config';
import { Text } from '@/components/Text';
import { TextReveal } from '@/components/TextReveal';
import ballImage from '@/public/about/line-ball.png';

export const AboutClients = () => (
  <div className="Template-clients wrap grid pt:10vw pb:15vw" id="clients">
    <Figure
      alt="Line ball"
      aria-hidden="true"
      borderRadius={false}
      className="Template-ball"
      placeholder={false}
      scroll
      scrollSpeed={-3}
      sizes={`${MQ.m} 30vw, 40vw`}
      {...ballImage}
    />
    <div className="grid-col grid-col:6@s -start:6@s -start:7@m">
      <Hr className="mb:l" />
      <Heading className="mb:0" size="h4">
        <TextReveal text={['Clients']} />
      </Heading>
    </div>
    <div className="grid-col grid-col:6@s -start:6@s -start:7@m">
      {/* prettier-ignore */}
      <Text animate className="mb">
          Anton&Anton,
          Biocode,
          Bonnier Books (Academic bookstore),
          Caverion,
          City of Tampere,
          Coxa,
          Dahl,
          Ekovilla,
          Enervent,
          Fair trade,
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
  </div>
);
