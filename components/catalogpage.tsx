import { Great_Vibes } from 'next/font/google'
import Preview from './preview'
import NavBar from './navbar'
import Catalog from './catalog'

const GreatVibes = Great_Vibes({subsets: ['latin'], weight: '400'})

export default function CatalogPage() {
  return(
    <div className='min-h-[1080px] max-h-[1400px] bg-primary flex flex-col w-full p-10 mb-20'>
      <NavBar logo />

      <div className='flex flex-1'>
        <div className='flex flex-col flex-1'>
          <NavBar />
          <Catalog />
        </div>
        <Preview />
        
      </div>
    </div>
  )
}