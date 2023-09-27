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

function Footer() {
  const policies = getAllPolicies();
  return (
    <footer className='w-full bg-amber-100/20 py-6 mt-20'>
      <section className='container mx-auto grid grid-cols-4 gap-5 mt-5 mb-10 place-items-center'>
        <div>
          <span className={`text-3xl font-thin  ${font.className} uppercase`}>
            Handmade <br /> Moroccan <br /> Rugs
          </span>
        </div>
        <Brand />
        <ImportantLinks />
        <div className='flex flex-col justify-center items-center gap-3'>
          <Link href={'/'}>
            <span className={`text-2xl  ${font.className} uppercase`}>
              BeniOuarain <br /> Rugs
            </span>
          </Link>
          <SocialMedia />
        </div>
      </section>

      <section className='text-xs text-gray-400 flex py-4 justify-evenly max-w-5xl mx-auto mt-8 uppercase'>
        {policies.map((policy) => (
          <Link href={`/policies/${policy.id}`} key={policy.id}>
            <span className='hover:underline'>{policy.title}</span>
          </Link>
        ))}
      </section>
      <section className='text-center pt-5 border-t border-amber-900/10 '>
        <Link href={'/'}>
          <span className='font-bold hover:underline'>BeniOuarain Rugs</span>{' '}
          All rights reserved
        </Link>
        &copy; {new Date().getFullYear()}
      </section>
    </footer>
  );
}

export default Footer;

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
