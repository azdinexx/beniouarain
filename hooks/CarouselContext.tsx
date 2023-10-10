'use client';
import ImageCaroussel from '@/components/ProductsDetailsPage/ImageCaroussel';
import { Dispatch, SetStateAction, createContext, useState } from 'react';

interface Props {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  setimages: Dispatch<SetStateAction<string[]>>;
  setCurrent: Dispatch<SetStateAction<number>>;
}

export const CarouselContext = createContext<Props>({
  isOpen: false,
  setIsOpen: () => {},
  setimages: () => {},
  setCurrent: () => {},
});

export function CarouselProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [current, setCurrent] = useState(0);
  const [images, setimages] = useState<string[]>([]);

  return (
    <CarouselContext.Provider
      value={{ isOpen, setIsOpen, setimages, setCurrent }}
    >
      {isOpen && <ImageCaroussel images={images} current={current} />}
      {children}
    </CarouselContext.Provider>
  );
}
