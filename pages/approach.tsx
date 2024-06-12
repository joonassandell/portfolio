import { ApproachPage } from '@/features/Approach';
import { getSitemap } from '@/lib/utils';

export default function Page() {
  const sitemap = getSitemap('approach', 'common');

  return <ApproachPage {...sitemap} />;
}
