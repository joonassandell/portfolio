import { AboutPage } from '@/features/About';
import { getSitemap } from '@/lib/utility';

const { id, title } = getSitemap('about', 'secondary');

export default function Page() {
  return <AboutPage id={id} title={title} />;
}
