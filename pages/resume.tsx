import { getSitemap } from '@/lib/utils';
import { ResumePage } from '@/features/Resume';

export default function Page() {
  const sitemap = getSitemap('resume', 'common');

  return <ResumePage {...sitemap} />;
}
