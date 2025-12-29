import data from './placeholder-images.json';
import { StaticImageData } from 'next/image';
import person1 from '../../public/assets/team/Fares Jazar.jpeg';
import person2 from '../../public/assets/team/Hadeel Sabawi.png';
import person3 from '../../public/assets/team/Rahaf Abdullah.png';
import person4 from '../../public/assets/team/Hammam Attar.jpeg';
import person5 from '../../public/assets/team/Hamada Abaaz.jpeg';
// import person6 from '@/assets/team/person-6.jpg';

export type ImagePlaceholder = {
  id: string;
  description: string;
  imageUrl: string | StaticImageData;
  imageHint: string;
};

const rawImages = data.placeholderImages;

export const PlaceHolderImages: ImagePlaceholder[] = rawImages.map(img => {
  if (img.id === 'person-1') return { ...img, imageUrl: person1 };
  if (img.id === 'person-2') return { ...img, imageUrl: person2 };
  if (img.id === 'person-3') return { ...img, imageUrl: person3 };
  if (img.id === 'person-4') return { ...img, imageUrl: person4 };
  if (img.id === 'person-5') return { ...img, imageUrl: person5 };
  // if (img.id === 'person-6') return { ...img, imageUrl: person6 };
  return img;
});
