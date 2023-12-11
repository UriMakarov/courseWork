import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Sidebar } from "../src/components/Sidebar.jsx";
import { Menu } from "../src/components/Menu.jsx";

export function Layout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  function SidebarOpenHandler() {
    setSidebarOpen(!sidebarOpen);
  }

  return (
    <>
      <div className={`flex h-screen bg-gradient-to-b from-blue to-light-blue overflow-hidden`}>  {/* //fullscreen */}
        <div className={`flex ${sidebarOpen ? 'w-[32%] 3xl:w-[25%]' : 'bg-white'} `} > {/* left sidebar + menu */}
          <div className={`flex ${sidebarOpen 
            ? 'w-1/4 rounded-none' 
            : 'w-[72px] rounded-xl my-[8px] ml-[8px] bg-gradient-to-b from-blue to-light-blue'}`} >{/* sidebar container */}
            <Sidebar open={sidebarOpen} handler={SidebarOpenHandler} />
            {sidebarOpen && <Menu />}
          </div>
        </div>
        <div className={`flex grow bg-white  ${sidebarOpen ? 'max-3xl:my-[5vh] max-3xl:rounded-l-[22px]' : 'rounded-none'} `} > {/* outlet container */}
          <Outlet />
        </div>
        {sidebarOpen && <div className={`absolute w-[68%] h-[90vh] ml-[32%] my-[5vh] bg-white rounded-l-[22px] overflow-hidden opacity-80 3xl:hidden`} />} {/* outlet cover */}
      </div>
    </>
  );
}
