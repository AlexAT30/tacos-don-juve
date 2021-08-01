import 'bootstrap/dist/css/bootstrap.min.css'
import Slider from './componets/Slider'
import MenuContainer from './componets/MenuContainer'
import NavBar from './componets/NavBar';
import { useState } from 'react';
import Footer from './componets/Footer';
import PromotionsContainer from './componets/PromotionsContainer';
import Opinions from './componets/Opinions';

function App() {
return (
    <div className="App">
      <NavBar />
      <Slider />
      <PromotionsContainer />
      <MenuContainer />
      <Opinions />
      <Footer />
    </div>
  );
}

export default App;
