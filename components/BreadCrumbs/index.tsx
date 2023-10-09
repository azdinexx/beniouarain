'use client';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';

function BreadCrumbs() {
  const router = useRouter();
  const pathname = usePathname();

  if (pathname === '/') {
    return null;
  }
  return (
    <section className='bg-amber-50/25'>
      <div className='container mx-auto py-2   flex  w-full gap-3 items-center text-amber-400'>
        <Link href={'/'}>
          <span className='  hover:text-amber-500 cursor-pointer rounded-md p-1   '>
            home
          </span>
        </Link>

        {pathname.split('/').map((path, index) => {
          if (path !== '') {
            return (
              <>
                <span
                  className='text-amber-400/50 cursor-pointer rounded-md p-1  '
                  key={`${path}'sfv52'`}
                >
                  /
                </span>
                <Link href={path} key={index * 10}>
                  <span className='  hover:text-amber-500 cursor-pointer rounded-md p-1  '>
                    {path}
                  </span>
                </Link>
              </>
            );
          }
          return;
        })}
      </div>
    </section>
  );
}

export default BreadCrumbs;
