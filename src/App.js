import './App.css';
import { Home } from './MyComponents/HomeComponent/Home';
import { Footer } from './MyComponents/HomeComponent/HomeChildrens/Footer';
import { Header } from './MyComponents/HomeComponent/HomeChildrens/Header';

import { Contact } from './MyComponents/ContactComponent/Contact';
import { About } from './MyComponents/AboutComponent/About';
import { Product } from './MyComponents/ProductComponent/Product';
import { Collection } from './MyComponents/CollectionComponent/Collection';
import { Help } from './MyComponents/Extra/Help';
import { PageNotFound } from './MyComponents/Extra/PageNotFound';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { Login } from './MyComponents/UserRelatedStuff/Login';
import { Register } from './MyComponents/UserRelatedStuff/Register';
import { UserAccount } from './MyComponents/UserRelatedStuff/UserAccount';
// import { useLocation } from 'react-router-dom'
import './MyComponents/publicStyle.css'
import { SingleProduct } from './MyComponents/ProductComponent/ProductChildrens/SingleProduct';


function App() {
  // let location = useLocation();
  // console.log(location.pathname);
  return (
    
    <div className="App">
      
      <Header />
      <Router>        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/product" element={<Product />} />

          <Route path="/product/:id" element={<SingleProduct />} />

          <Route path="/collection" element={<Collection />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/help" element={<Help />} />
          <Route path="/account" element={<UserAccount />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
      <Footer />

      {/* <Router>
      {location.pathname==="/login"?null:<Header/>}
      </Router> */}
      
    </div>
  );
}

export default App;
