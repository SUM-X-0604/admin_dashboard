import MainContainer from "./components/MainContainer";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <>
      <div className="px-2 pb-4 w-full h-full bg-blue-500 flex items-center justify-between sm:items-start">
        <Sidebar />
        <MainContainer />
      </div>
    </>
  );
}

export default App;
