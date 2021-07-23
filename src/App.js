import 'bootstrap/dist/css/bootstrap.min.css'
import Slider from './componets/Slider'
import MenuContainer from './componets/MenuContainer'
import NavBar from './componets/NavBar';
import Promotions from './componets/Promotions';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Slider />
      <Promotions />
      <MenuContainer />
    </div>
  );
}

export default App;
