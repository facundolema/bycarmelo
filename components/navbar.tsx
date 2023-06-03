import { Great_Vibes } from 'next/font/google'
import NavBarButton from './navbarbtn'
import Preview from './preview'
import { ReactElement } from 'react'

const GreatVibes = Great_Vibes({subsets: ['latin'], weight: '400'})

export default function NavBar (
  { buttons, logo, back, handleBack } : 
  { buttons?: ReactElement[] | string[],
    logo?: boolean, back?: boolean, handleBack?: () => {}
  })
{
  return (
    <div className='flex bg-primary w-full h-14 rounded-lg border-grey-900 border border-r-[3px] border-b-[3px] items-center justify-center mb-4'>
      {
        logo &&
        <div className={`flex h-fit w-fit ${GreatVibes.className} text-3xl px-2 mx-2`}>
          bycarmelo
        </div>
      }
      
      <div className='flex-1' />

      <div className='flex gap-2 px-2'>
        <NavBarButton color="bg-grey-100">B</NavBarButton>
        <NavBarButton color="bg-accent-500">P</NavBarButton>
      </div>

    </div>
  )
}