import Image from 'next/image'
import AboutMe from '@/components/AboutMe'
import VincentComponent from '@/components/VincentComponent'


const Home = () => {
  return (
    <div>
      <AboutMe className='flex flex-col bg-red-600'/>
      <AboutMe className='bg-yellow-300'/>
      <VincentComponent/>
    </div>
  )
}

export default Home;
