
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Herosection from "./Pages/Herosection"
import Footer from "./Pages/Footer"
function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Herosection/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
    
    </>
  );
}

export default App;
