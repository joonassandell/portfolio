import { getSitemap } from '@/lib/utils';
import { MilestonesPage } from '@/features/Milestones';

export default function Page() {
  const sitemap = getSitemap('milestones', 'common');

  return <MilestonesPage {...sitemap} />;
}
