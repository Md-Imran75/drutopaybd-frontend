import { BrowserRouter, Routes, Route } from "react-router-dom"
import PaymentHome from "./components/paymentMethod/PaymentHome"
import Home from "./pages/Home"
import About from "./pages/About"
import Price from "./pages/Price,"

function App() {

  return (
    <>
      <div>
      <BrowserRouter>
    
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/pricing" element={<Price/>} />


      </Routes>
     
    </BrowserRouter>
      </div>
    </>
  )
}

export default App
