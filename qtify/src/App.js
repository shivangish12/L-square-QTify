import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
function App() {
  return (
    <div>
      <Navbar searchData={""}></Navbar>
      <Hero />
    </div>
  );
}

export default App;
