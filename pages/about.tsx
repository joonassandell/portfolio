import { AboutPage } from '@/features/About';
import { getSitemap } from '@/lib/utils';

export default function Page() {
  const { id, title } = getSitemap('about', 'common');

  return <AboutPage id={id} title={title} />;
}
