import Image from 'next/image'
import AboutMe from '@/components/AboutMe'
import VincentComponent from '@/components/VincentComponent'
import Btn from '@/components/BastyComponent'


export default function Home() {
  return (
    <div>
      <AboutMe />
      <VincentComponent/>
      <Btn />
    </div>
  )
}
