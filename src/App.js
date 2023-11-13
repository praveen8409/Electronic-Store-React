import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Index } from './pages';
import { About } from './pages/about';
import { Cart } from './pages/cart';
import { Service } from './pages/service';
import { Store } from './pages/store';
import { Dashboard } from './pages/users/dashboard';
import { Profile } from './pages/users/profile';
import { Contact } from './pages/contact';
import CustomNavbar from './components/Navbar';

function App() {
  
  return (
   <BrowserRouter>
   <CustomNavbar/>
   <Routes>
    <Route path='/' element={<Index/>} />
    <Route path='/about' element={<About/>} />
    <Route path='/contact' element={<Contact/>} />
    <Route path='/cart' element={<Cart/>} />
    <Route path='/service' element={<Service/>} />
    <Route path='/store' element={<Store/>} />
    <Route path='/users' element={<Dashboard/>} >
      <Route path='profile' element={<Profile/>}></Route>
     
    </Route>

    
   </Routes>
   </BrowserRouter>
  );
}

export default App;
