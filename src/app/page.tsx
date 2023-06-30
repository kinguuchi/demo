import Image from 'next/image'
import AboutMe from '@/components/AboutMe'
import VincentComponent from '@/components/VincentComponent'
import RuelComponent from '@/components/RuelComponent'


const Home = () => {
  return (
    <div>
      <AboutMe className='flex flex-col bg-red-600'/>
      <AboutMe className='bg-yellow-300'/>
      <VincentComponent/>
      <RuelComponent/>
    </div>
  )
}

export default Home;
