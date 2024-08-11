import {BrowserRouter, Routes,Route} from 'react-router-dom';
// pages
import Home from "./Pages/Home";
import About from "./Pages/About";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import Profile from "./Pages/Profile";
import Pricing from "./Pages/Pricing";
import Services from "./Pages/Services";
import ContactUs from "./Pages/ContactUs";
// components
import Header from "./components/Header";


const App = () => {
  return (
<BrowserRouter>
{/* header */}
<Header />
  <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/about' element={<About />} />

    <Route path='/sign-in' element={<SignIn />} />
    <Route path='/sign-up' element={<SignUp />} />
    <Route path='/profile' element={<Profile />} />
    <Route path='/services' element={<Services />} />
    <Route path='/pricing' element={<Pricing />} />
    <Route path='/contact us' element={<ContactUs />} />


  </Routes>
</BrowserRouter>     
    
  );
}

export default App;
