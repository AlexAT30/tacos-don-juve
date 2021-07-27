import 'bootstrap/dist/css/bootstrap.min.css'
import Slider from './componets/Slider'
import MenuContainer from './componets/MenuContainer'
import NavBar from './componets/NavBar';
import Cart from './componets/Cart';
import { useState } from 'react';
import Footer from './componets/Footer';
import PromotionsContainer from './componets/PromotionsContainer';

function App() {

  const [products, setProducts] = useState ([]);

  return (
    <div className="App">
      <NavBar />
      <Slider />
      <PromotionsContainer setProducts={setProducts} />
      <MenuContainer setProducts={setProducts} />
      <Cart products={products} />
      <Footer />
    </div>
  );
}

export default App;
