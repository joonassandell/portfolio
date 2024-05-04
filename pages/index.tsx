import { getSitemap } from '@/lib/utils';
import { HomePage } from '@/features/Home';

export default function Page() {
  const { id } = getSitemap('home');

  return <HomePage id={id} />;
}
