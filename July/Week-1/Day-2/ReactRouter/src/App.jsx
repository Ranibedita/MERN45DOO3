import { Route, Routes } from "react-router";
import Home from "./Components/Home";
import About from "./Components/About";
import Service from "./Components/Service";
import FetchId from "./Components/FetchId";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <>
      <h1>Hello</h1>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/service" element={<Service />}></Route>
        <Route path="/:id" element={<FetchId />}></Route>
      </Routes>
    </>
  );
}

export default App;
