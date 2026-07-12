import Hero from '@/components/sections/Hero';
import WhoIAm from '@/components/sections/WhoIAm';
import WhatILove from '@/components/sections/WhatILove';
import Gallery from '@/components/sections/Gallery';
import Connect from '@/components/sections/Connect';

export { metadata } from './metadata';

export default function Home() {
  return (
    <>
      <Hero />
      <WhoIAm />
      <WhatILove />
      <Gallery />
      <Connect />
    </>
  );
}
