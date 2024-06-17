import { ContactPage } from '@/features/Contact';
import { getSitemap } from '@/lib/utils';

export default function Page() {
  const sitemap = getSitemap('contact', 'common');

  return <ContactPage {...sitemap} />;
}
