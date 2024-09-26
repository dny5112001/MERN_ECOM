  import './App.css';
import Navbar from './Components/Navbar/Navbar.jsx'
import {BrowserRouter,Routes,Route } from 'react-router-dom';
import ShopCategory from './Pages/ShopCategory.jsx';
import Product from './Pages/Product.jsx';
import Cart from './Pages/Cart.jsx';
import LoginSignup from './Pages/LoginSignup.jsx';
import Shop from './Pages/Shop.jsx';
import Footer from './Components/Footer/Footer.jsx';
import men_banner from './Components/Assets/banner_mens.png'
import women_banner from './Components/Assets/banner_women.png'
import kids_banner from './Components/Assets/banner_kids.png'


function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>

      <Routes>
        <Route path="/" element={<Shop/>}/>
        <Route path='/mens' element= {<ShopCategory  banner ={men_banner} category ="men"/>}></Route>
        <Route path='/Womens' element= {<ShopCategory  banner ={women_banner} category ="women"/>}></Route>
        <Route path='/kids' element= {<ShopCategory  banner ={kids_banner} category ="kid"/>}></Route>

        <Route path="/product" element = {<Product />} >
          <Route path=':productId' element = {<Product />} />
        </Route>

        <Route path ="/cart" element = {<Cart/>} />
        <Route path ="/login" element = {<LoginSignup/>} />
      </Routes>

      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
