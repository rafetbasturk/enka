import { StaticImageData } from 'next/image';

export interface Reference {
  slug: string;
  image: StaticImageData;
  name: string;
}