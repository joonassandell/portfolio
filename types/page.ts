import { HeaderProps } from '@/components/Header';
import { TemplateProps } from '@/components/Template';

export interface PageProps {
  id: TemplateProps['id'];
  images?: string[];
  themeColor?: string;
  title: string;
}

export interface PageProjectProps extends PageProps {
  images: string[];
  navTitle: HeaderProps['navTitle'];
  title: string;
  themeColor?: string;
  url: URL['href'];
  year: string | number;
}
