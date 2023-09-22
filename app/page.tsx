import Hero from './components/hero';
import CarouselComponent from './components/carrousel';
import Background from './components/Background';

export default function Home() {
  return (
    <main className='flex flex-col gap-1'>
      <Background />
      <Hero />
      <CarouselComponent />
    </main>
  );
}
