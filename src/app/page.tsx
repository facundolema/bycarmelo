import { scroller } from 'react-scroll';

import { CatalogPage, LandingPage, Footer } from '../../components'

export default function Home() {
  return (
    <main className="flex flex-col">
      <LandingPage />
      <CatalogPage />
      <Footer />
    </main>
  )
}