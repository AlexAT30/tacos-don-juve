import 'bootstrap/dist/css/bootstrap.min.css'
import Slider from './componets/Slider'
import MenuContainer from './componets/MenuContainer'
import NavBar from './componets/NavBar';
import Promotions from './componets/Promotions';
import Cart from './componets/Cart';
import { useState } from 'react';

function App() {
  
  const [products, setProducts] = useState ([]);

  return (
    <div className="App">
      <NavBar />
      <Slider />
      <Promotions />
      <MenuContainer setProducts={setProducts} />
      <Cart products={products} />
    </div>
  );
}

export default App;
