import React from 'react';
import { Pinterest } from './pintrest-icon';
import { Facebook } from './facebook-icon';
import { Instagram } from './instagram-icon';
import { Youtube } from './youtube-icon';
import Link from 'next/link';
import { Croissant_One } from 'next/font/google';
import { getAllPolicies } from '@/utils/getPolicies';
import Brand from './brand';
import ImportantLinks from './importantLinks';

const font = Croissant_One({
  subsets: ['latin-ext'],
  weight: ['400'],
});

async function Footer() {
  const policies = await getAllPolicies();
  return (
    <footer className='w-full bg-amber-100/20 py-6 mt-20'>
      <section className='container mx-auto grid  grid-cols-2  md:grid-cols-4 gap-5 mt-5 mb-10 place-items-center'>
        <div className='hidden md:block'>
          <span className={`text-3xl font-thin  ${font.className} uppercase`}>
            Handmade <br /> Moroccan <br /> Rugs
          </span>
        </div>
        <Brand />
        <ImportantLinks />
        <div className='flex flex-col justify-center items-center gap-3 col-span-2 md:col-span-1 border p-2 rounded-lg text-stone-600'>
          <Link href={'/'} aria-label={`the homepage of BeniOuarain Rugs`}>
            <span className={`text-2xl  ${font.className} uppercase`}>
              BeniOuarain <br /> Rugs
            </span>
          </Link>
          <SocialMedia />
        </div>
      </section>

      <section className='text-xs text-gray-400 flex flex-wrap py-4 gap-3  justify-evenly max-w-5xl mx-auto mt-8 uppercase'>
        {policies.map((policy) => (
          <Link
            href={`/policies/${policy
              .toLocaleLowerCase()
              .replaceAll(' ', '-')}`}
            key={policy}
          >
            <span className='hover:underline'>{policy}</span>
          </Link>
        ))}
      </section>
      <section className='text-center pt-5 border-t border-amber-900/10 '>
        <span className='font-bold hover:underline'>BeniOuarain Rugs</span> All
        rights reserved &copy; {new Date().getFullYear()}
      </section>
    </footer>
  );
}

export default Footer;

function SocialMedia() {
  return (
    <div className='flex gap-4  '>
      <Link
        href={'https://www.facebook.com/Artossi'}
        aria-label='facebook page'
        target='_blank'
      >
        <Facebook />
      </Link>
      <Link
        href={'https://www.instagram.com/artossi_official/'}
        aria-label='instagram page'
        target='_blanck'
      >
        <Instagram />
      </Link>
      <Link
        href={'https://www.youtube.com/channel/UCIIYYM8V1Y9aQdYJgO2BjmQ'}
        aria-label='pintrest page'
        target='_blanck'
      >
        <Pinterest />
      </Link>
      <Link
        href={'https://www.pinterest.com/Artossi_official/'}
        aria-label='youtube page'
        target='_blanck'
      >
        <Youtube />
      </Link>
    </div>
  );
}
