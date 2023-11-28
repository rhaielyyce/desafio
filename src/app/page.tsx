import codegirl from '@/img/codegirl.png'
import logo from '@/img/logo.png'
import Image from 'next/image'

export default function Home() {
  return (
    <main className='bg-pink-pink flex flex-col max-h-screen h-screen lg:bg-background lg:bg-cover lg:flex '>
      <Image className='lg:sr-only' src={codegirl} alt="cover"  />
      <div className='p-4 mt-10 flex flex-1 flex-col justify-between h-full' >
         <Image src={logo} alt="cover" width={250} className='lg:p-4 lg:w-40' />
         <div className='flex flex-col gap-4 lg:p-7'>
           <h1 className='text-2xl font-bold text-white lg:text-4xl/snug'>Receba notícias
           <br /> atualizadas sobre o <br />
           MERCADO DE TECNOLOGIA</h1> 
           <button className='bg-zinc-800 hover:bg-pink-950 mb-8 text-white rounded-lg w-full p-4  lg:w-72 lg:bg-pink-pink lg:hover:bg-pink-pink/50 '>Inscreva-se</button>
         </div>
         
      </div>
     
    </main>
  
  )
}
