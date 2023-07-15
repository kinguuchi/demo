import AboutMe from '@/components/AboutMe';
import Card from '@/components/Card';
import { Data } from '../../public/data';
import Login from '@/components/login/Login';

const Home = () => {
  return (
    <div className="gap-4 items-center justify-center h-screen p-1 grid grid-cols-2">
      {/* <AboutMe className='flex flex-col bg-red-600'/>
      <AboutMe className='bg-yellow-300'/> */}
      <Card items={Data} />
      <Login/>
    </div>
  );
};

export default Home;
