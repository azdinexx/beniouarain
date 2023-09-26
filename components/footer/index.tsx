import React from 'react';
import { Pinterest } from './pintrest-icon';
import { Facebook } from './facebook-icon';
import { Instagram } from './instagram-icon';
import { Youtube } from './youtube-icon';
import Link from 'next/link';
import { Croissant_One } from 'next/font/google';

const font = Croissant_One({
  subsets: ['latin-ext'],
  weight: ['400'],
});

function Footer() {
  return (
    <footer className='w-full bg-amber-100/20 py-6 mt-20'>
      <section className='max-w-6xl mx-auto grid grid-cols-4 gap-5'>
        <Widget>
          <h1 className='text-xl font-bold'>Footer</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
            voluptatum, voluptate, quae, quia voluptas quos aperiam consequuntur
            dolorum doloremque quibusdam tempore accusantium voluptatibus.
            Quisquam, voluptas. Quisquam, voluptas.
          </p>
        </Widget>
        <Widget>
          <h1 className='text-xl font-bold'>Footer</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
            voluptatum, voluptate, quae, quia voluptas quos aperiam consequuntur
            dolorum doloremque quibusdam tempore accusantium voluptatibus.
            Quisquam, voluptas. Quisquam, voluptas.
          </p>
        </Widget>
        <Widget>
          <h1 className='text-xl font-bold'>Footer</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
            voluptatum, voluptate, quae, quia voluptas quos aperiam consequuntur
            dolorum doloremque quibusdam tempore accusantium voluptatibus.
            Quisquam, voluptas. Quisquam, voluptas.
          </p>
        </Widget>
        <Widget className='flex flex-col  items-center justify-center text-center'>
          <span className={`text-3xl ${font.className}`}>Beni Ouarain</span>
          <span className={`text-3xl ${font.className} mb-5`}>Rugs</span>
          <SocialMedia />
        </Widget>
      </section>
      <section className='text-center pt-10 '>
        All rights reserved &copy; {new Date().getFullYear()}
      </section>
    </footer>
  );
}

export default Footer;

function Widget({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={`w-full p-2 ${className}`}>{children}</div>;
}

function SocialMedia() {
  return (
    <div className='flex gap-4'>
      <Link href={'/'}>
        <Facebook />
      </Link>
      <Link href={'/'}>
        <Instagram />
      </Link>
      <Link href={'/'}>
        <Pinterest />
      </Link>
      <Link href={'/'}>
        <Youtube />
      </Link>
    </div>
  );
}
