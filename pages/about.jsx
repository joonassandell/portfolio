import { AboutPage } from '@/features/About';
import { getSitemap } from '@/lib/utility';

export default function Page() {
  const { id, title } = getSitemap('about', 'secondary');

  return <AboutPage id={id} title={title} />;
}
