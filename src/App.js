import { useState } from "react";
import MainContainer from "./components/MainContainer";
import Sidebar from "./components/Sidebar";

function App() {

  const [showMenu, setShowMenu] = useState(false);

  const sidebarHandler = () => {
    setShowMenu(!showMenu)
  }

  return (
    <>
      <div className="px-2 pb-4 w-full h-full flex items-center justify-between sm:items-start bg-blue-500">
        <Sidebar menu={showMenu} />
        <MainContainer sidebarHandler={sidebarHandler} />
      </div>
    </>
  );
}

export default App;
