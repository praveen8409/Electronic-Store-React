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
import { ToastContainer } from 'react-toastify';
import { Login } from './pages/login';
import { Register } from './pages/register';
import { UserProvider } from './context/user.provider';
import { Home } from './pages/users/home';
import { Order } from './pages/users/order';

function App() {

  return (
    <UserProvider>
      <BrowserRouter>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />

        <CustomNavbar />
        <Routes>
          <Route path='/' element={<Index />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/service' element={<Service />} />
          <Route path='/store' element={<Store />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/users' element={<Dashboard />} >
            <Route path='profile' element={<Profile />}/>
            <Route path='home' element={<Home />}/>
            <Route path='orders' element={<Order />}/>

          </Route>
        </Routes>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
