import SideSlideBar from './Sideslidebar';

const Header = () => {

  return (
    <div className='h-[8vh] flex justify-between px-2 md:px-8 mb-4 py-4'>
      <div className='flex flex-row items-center gap-4 '>

        <div className='flex flex-row gap-2'>
          <div className='w-4 h-4 bg-green-400 rounded-full transform cursor-pointer hover:scale-125 transition-transform duration-200'></div>
          <div className='w-4 h-4 bg-green-400 rounded-full transform cursor-pointer hover:scale-125 transition-transform duration-200'></div>
          <div className='w-4 h-4 bg-green-400 rounded-full transform cursor-pointer hover:scale-125 transition-transform duration-200'></div>
        </div>

      </div>
      <div className='flex items-center gap-4'>
        <a href='mailto:harshkumarsingh54321@gmail.com' className='bg-green-600 p-2 px-4 rounded-md text-xs font-semibold text-gray-300 transform transition-all duration-300 hover:text-gray-800 hover:scale-110'>
          Contact Me
        </a>


        <SideSlideBar />
      </div>

    </div>

  );
};

export default Header;
