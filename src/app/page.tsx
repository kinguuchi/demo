import Image from 'next/image'
import AboutMe from '@/components/AboutMe'
import VincentComponent from '@/components/VincentComponent'
import Btn from '@/components/BastyComponent'


const Home = () => {
  return (
    <div>
      <VincentComponent/>
      <AboutMe className='flex flex-col bg-red-600'/>
      <AboutMe className='bg-yellow-300'/>
      <VincentComponent/>
    </div>
  )
}

export default Home;
