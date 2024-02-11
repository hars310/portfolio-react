import Header from "./components/Header";
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className='bg-[#14121B]  h-[100vh] p-4 pr-0 text-white overflow-y-hidden'>
      <Header/>
      <div className="flex w-[100%] overflow-y-hidden">
        <Sidebar />
        <Main />
      </div>
    </div>
  );
}

export default App;
