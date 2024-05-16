import { getSitemap } from '@/lib/utils';
import { HomePage } from '@/features/Home';

export default function Page() {
  const sitemap = getSitemap('home');

  return <HomePage {...sitemap} />;
}
