import Image from 'next/image'
import AboutMe from '@/components/AboutMe'
import VincentComponent from '@/components/VincentComponent'
import RuelComponent from '@/components/RuelComponent'


export default function Home() {
  return (
    <div>
      <AboutMe />
      <VincentComponent/>
      <RuelComponent/>
    </div>
  )
}
