'use client';
import ImageCaroussel from '@/components/ProductsDetailsPage/ImageCaroussel';
import { Dispatch, SetStateAction, createContext, useState } from 'react';

export const CarouselContext = createContext({});

export function CarouselProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [current, setCurrent] = useState(0);
  const [images, setimages] = useState([]);

  return (
    <CarouselContext.Provider
      value={{ isOpen, setIsOpen, setimages, setCurrent }}
    >
      {isOpen && <ImageCaroussel images={images} current={current} />}
      {children}
    </CarouselContext.Provider>
  );
}
