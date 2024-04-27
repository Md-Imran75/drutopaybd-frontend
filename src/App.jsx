import { BrowserRouter, Routes, Route } from "react-router-dom"
import PaymentHome from "./components/paymentMethod/PaymentHome"
import {Helmet} from 'react-helmet'
import Home from "./pages/Home"

function App() {

  return (
    <>
      <div>
      <BrowserRouter>
      <Helmet>
        <title>DrutoPayBD</title>
        <meta name="description" content="Welcome to WEB LAGBE, where innovation meets functionality." />
        <meta name="keywords" content="Software development, Web development, App development, Game development" />
      </Helmet>
      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>
     
    </BrowserRouter>
      </div>
    </>
  )
}

export default App
