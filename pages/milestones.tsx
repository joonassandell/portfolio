import { getSitemap } from '@/lib/utils';
import { MilestonesPage } from '@/features/Milestones';

export default function Page() {
  const { id, title } = getSitemap('milestones', 'common');

  return <MilestonesPage id={id} title={title} />;
}
