import SideSlideBar from './Sideslidebar';

const Header = () => {
 
  return (
    <div className='h-[8vh] flex justify-between px-2 md:px-8 py-4'>
      <div className='flex flex-row items-center gap-4'>

        <div className='flex flex-row gap-2'>
          <div className='w-4 h-4 bg-green-400 rounded-full'></div>
          <div className='w-4 h-4 bg-green-400 rounded-full'></div>
          <div className='w-4 h-4 bg-green-400 rounded-full'></div>
        </div>
      </div>
      <div className='flex items-center gap-4'>
        <button className='bg-green-600 p-2 px-4 rounded-md text-xs font-semibold text-gray-300'>Contact Me</button>
      <SideSlideBar />
      </div>
      
    </div>
    
  );
};

export default Header;
