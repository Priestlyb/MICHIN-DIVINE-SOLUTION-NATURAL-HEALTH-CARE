import React, { useEffect } from "react";
import Aos from "aos"
import Navbar from "./components/navbar/navbar";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from "./components/layout";
import Footer from "./components/footer/footer";
import About from "./pages/about/about";
import Contactus from "./pages/contactus/contactus";

function App() {

  useEffect(() => {
    Aos.init({
      duration: 900,
      delay: 100,
    });
  }, [])

  return (
    <>

        < Router>
          <Navbar />
          <Routes>
            <Route path='/' exact element={<Layout />} />
            <Route path='/about' element={<About />} />
            <Route path='/contactus' element={<Contactus />} />
          </Routes>
          <Footer />
        </Router>

    </>
  );
}

export default App;
