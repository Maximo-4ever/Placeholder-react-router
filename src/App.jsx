import { Outlet } from "react-router-dom";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <div className="App container mt-4">
        <Outlet />
      </div>
    </>
  );
}

export default App;
