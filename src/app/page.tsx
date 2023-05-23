import Image from 'next/image'
import { scroller } from 'react-scroll';

import { Great_Vibes, GFS_Didot } from 'next/font/google'

const GreatVibes = Great_Vibes({subsets: ['latin'], weight: '400'})
const Didot = GFS_Didot({subsets: ['greek'], weight: '400'})

export default function Home() {
  return (
    <main className="flex flex-col">
      <LandingPage />
      <div className='h-screen flex'>
        <div className='m-10 bg-primary w-full h-10'></div>
      </div>
    </main>
  )
}

function LandingPage() {
  return (
    <div className='flex'>
    <div className='
      flex flex-col items-center justify-center
      bg-white w-1/2 h-screen'
      >
      <div className='flex flex-col items-end'>
        <h1 className={`${GreatVibes.className} text-8xl leading-[3rem] text-grey-900`}>bycarmelo</h1>
        <h5 className={`${Didot.className} text-lg text-grey-900`}>la mejor calidad, siempre</h5>
      </div>
      <VSpacer height={20} />
      <button className='
        rounded-[12px]
        bg-accent-500 text-grey-900
        w-80 h-[55px] my-3
        border-black border border-r-[3px] border-b-[3px]
        active:bg-accent-900'
        >
        Ir a la tienda
      </button>
      <button className='
        rounded-[12px] 
        bg-grey-100 text-grey-900
        w-80 h-[55px] my-3
        border-black border border-r-[3px] border-b-[3px]
        active:bg-grey-500'
        >
        Ver el catálogo
      </button>
    </div>
    <div className='bg-accent-100 w-1/2 h-screen relative'>
      <Image 
        src="/landing-page-image.jpg"
        alt="Image of a room with an orange sofa"
        style={{objectFit: "cover"}}
        fill
      />
    </div>
    </div>
  )
}

function VSpacer({ height }: {height: number}) {
  return (
    <div className={`w-full h-[25rem]`}>
    </div>
  )
}