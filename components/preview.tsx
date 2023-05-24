export default function Preview() {
  return (
    <div className='w-80 max-h-[50rem] flex-col items-center p-2 ml-4 rounded-lg border border border-r-[3px] border-b-[3px] border-gray-900 bg-primary hidden sm:flex'>
      <div className='w-full aspect-[4/3] bg-grey-100 rounded-lg border border-r-[3px] border-b-[3px] border-grey-900'>
      </div>
      <div>
        Sillon Lisboa
      </div>
      <div>
        $556.586,00
      </div>
      <div className='px-2'>
        <span className='h-8 w-8 inline-block bg-red-100 rounded-full mr-2'/>
        <span className='h-8 w-8 inline-block bg-red-100 rounded-full mr-2'/>
        <span className='h-8 w-8 inline-block bg-red-100 rounded-full mr-2'/>
        <span className='h-8 w-8 inline-block bg-red-100 rounded-full mr-2'/>
      </div>
      <div>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid illum modi repellat. Similique fuga iusto, adipisci laborum praesentium esse. Illum expedita ad dolorum repudiandae cumque possimus minima maiores animi? Asperiores.
      </div>
      <div className='flex-1'>

      </div>
      <button className='
        rounded-[12px]
        bg-accent-500 text-grey-900
        w-full h-[55px] my-3
        border-black border border-r-[3px] border-b-[3px]
        active:bg-accent-900'
        >
        Comprar
      </button>
      <button className='
        rounded-[12px] 
        bg-grey-100 text-grey-900
        w-full h-[55px] my-3
        border-black border border-r-[3px] border-b-[3px]
        active:bg-grey-500'
        >
        Añadir al carrito
      </button>
    </div>
  )
}