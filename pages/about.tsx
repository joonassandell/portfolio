import { AboutPage } from '@/features/About';
import { getSitemap } from '@/lib/utils';

export default function Page() {
  const sitemap = getSitemap('about', 'common');

  return <AboutPage {...sitemap} />;
}
