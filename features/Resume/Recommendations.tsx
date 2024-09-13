import { Avatar } from '@/components/Avatar';
import { Heading } from '@/components/Heading';
import { Quote, QuoteFooter, QuoteText } from '@/components/Quote';
import { TemplateArea } from '@/components/Template';
import profileJoni from '@/public/images/joni.jpg';
import profileJussi from '@/public/images/jussi.jpg';
import profileSami from '@/public/images/sami.png';

export const ResumeRecommendations = () => (
  <TemplateArea
    className="Template-recommendations"
    gridGap="m"
    id="recommendations"
    pt={false}
  >
    <aside className="Template-recommendations-aside grid-col grid-col:3@m">
      <Heading className="hyphens:auto" size="h6" tag="h2">
        <span>R</span>ecommendations
      </Heading>
    </aside>
    <div className="Template-recommendations-content grid -gap:row:l grid-col grid-col:9@m">
      <Quote
        cite="https://www.linkedin.com/in/joonassandell/details/recommendations"
        className="grid-col grid-col:11@m grid-col:9@xl"
      >
        <QuoteText>
          <p>
            Joonas is exceptionally talented individual with a rare combination
            of talent: designer and frontend developer who can do well crafted
            designs and also implement them with high quality. He is focused and
            hard working, yet as a person warm and approachable with good
            communication skills. My highest recommendation.
          </p>
        </QuoteText>
        <QuoteFooter>
          <Avatar
            image={{
              alt: 'Joni Rajanen profile picture',
              ...profileJoni,
            }}
            name="Joni Rajanen"
            text="CEO, Neurali"
          />
        </QuoteFooter>
      </Quote>
      <Quote
        cite="https://www.linkedin.com/in/joonassandell/details/recommendations"
        className="grid-col grid-col:11@m grid-col:9@xl"
      >
        <QuoteText>
          <p>
            I have had the pleasure of working with Joonas over the years.
            Together we have been involved in projects that have required not
            only strategic perspective but also extensive knowledge of digital
            technology, solid creative insight and a modern visual approach.
          </p>
          <p>
            Joonas is a very versatile, creative and also technically talented
            individual. He is a skilled discussionist with clients, and also
            good and attentive listener. He has a great ability to combine
            different implementation models and build business services from
            them to meet clients' needs.
          </p>
          <p>
            I would warmly recommend Joonas when looking for a versatile and
            professional expert for demanding visual implementations and
            technology-oriented design and development projects.
          </p>
        </QuoteText>
        <QuoteFooter>
          <Avatar
            image={{
              alt: 'Sami Hakimsan profile picture',
              ...profileSami,
            }}
            name="Sami Hakimsan"
            text="Business Designer, Mediasignal"
          />
        </QuoteFooter>
      </Quote>
      <Quote
        cite="https://www.linkedin.com/in/joonassandell/details/recommendations"
        className="grid-col grid-col:11@m grid-col:9@xl"
      >
        <QuoteText>
          <p>
            Having worked with Joonas as a colleague and then as a customer, I
            can really recommend his web design and development work. Omoroi's
            website, designed and developed by Joonas, helped our company to
            stand out and tell our story in a unique way.
          </p>
        </QuoteText>
        <QuoteFooter>
          <Avatar
            image={{
              alt: 'Jussi Salovaara profile picture',
              ...profileJussi,
            }}
            name="Jussi Salovaara"
            text="Sales Director, Omoroi"
          />
        </QuoteFooter>
      </Quote>
    </div>
  </TemplateArea>
);
