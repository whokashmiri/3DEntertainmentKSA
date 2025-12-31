import { placeholderImagesData } from './placeholder-images-data';

export type ImagePlaceholder = {
  id: string;
  description: string;
  imageUrl: string;
  imageHint: string;
};

const rawImages = placeholderImagesData.placeholderImages;

export const PlaceHolderImages: ImagePlaceholder[] = rawImages.map(img => {
  if (img.id === 'person-1') return { ...img, imageUrl: '/assets/team/Fares Jazar.jpeg' };
  if (img.id === 'person-2') return { ...img, imageUrl: '/assets/team/Hadeel Sabawi.png' };
  if (img.id === 'person-3') return { ...img, imageUrl: '/assets/team/Rahaf Abdullah.png' };
  if (img.id === 'person-4') return { ...img, imageUrl: '/assets/team/Hammam Attar.jpeg' };
  if (img.id === 'person-5') return { ...img, imageUrl: '/assets/team/Hamada Abaaz.jpeg' };
  // if (img.id === 'person-6') return { ...img, imageUrl: '/assets/team/person-6.jpg' };
  return img;
});
