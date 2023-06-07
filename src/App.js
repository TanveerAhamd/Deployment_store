import './App.css';
import Header from './component/Header';
import Footer from './component/Footer';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Categories from './pages/Categories';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Cart from './pages/Cart';
import { useEffect, useState } from 'react';
import ProductDetail from './pages/ProductDetail';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [product, setProduct] = useState([]);
  const [cartItem, setCartItem] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const navigator = useNavigate();
  const notify = () => toast.success("Item Added into Cart successfully");

  const addToCart = (product) => {
    // alert(product);
    const newArr = [...cartItem, product]
    setCartItem(newArr);
    notify();
    navigator("/")
  };
  const searchProduct = (search) => {
    const newAr = product.filter( (item) => {
      // console.log(search)
       return item.title.toLowerCase().includes(search.toLowerCase());
    });
    console.log(newAr)
    setFilteredProducts(newAr);
    console.log(filteredProducts)
   }
  const removeItem = (item,index) => {
   const updatedCart=  cartItem.tospliced(index,1);
    setCartItem(updatedCart);
  }
  // console.log(cartItem);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products").then((data) => {
      return data.json();
    }).then((res) => {
      setProduct(res);
      setFilteredProducts(res);
    }).catch((error) => {
      console.log(error)
    })
  }, [])
  return (
    <>
      <Header cart={cartItem} />
      <input type="text" onChange={ (event) => { searchProduct(event.target.value)} } />
      <div>
        <ToastContainer
          position="top-right"
          autoClose={1000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
      </div>
      <Routes>
        <Route path='/' element={<Home cart={addToCart} product={filteredProducts} />} />
        <Route path='/category/:category' element={<Categories cart={addToCart} />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/Cart' element={<Cart productInCart={cartItem}  removeCartItem={removeItem}/>} />
        <Route path='/product/:id' element={<ProductDetail cart={addToCart}  />} />
      </Routes>
      <Footer />
    </>
  );
}
export default App;
