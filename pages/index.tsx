import { HomePage } from '@/features/Home';
import { getSitemap } from '@/lib/utility';

export default function Page() {
  const { id } = getSitemap('home');

  return <HomePage id={id} />;
}
