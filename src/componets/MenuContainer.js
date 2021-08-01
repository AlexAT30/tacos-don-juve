import MenuInfo from './MenuInfo';
import ProductInfo from './ProductInfo';
import menuData from '../menuData';
import Title from './Title';

const MenuContainer = () => {
  // Pinta las categorias
  const typeList = menuData.map ((item, index) => {
    // Pinta los productos en su categoria correspondiente
    const productsList = menuData[index].products.map ((item, index) => {
      return <ProductInfo key={`P${index}${Math.floor (Math.random () * 10000)}`}
      name={item.name} description={item.description} price={item.price} />
    })
    return <MenuInfo key={`C${index}`} type={item.category} number={index} products={productsList} />
  })

  return (
    <div className='container-fluid'>
      <Title title='menú' id='menu' />
      {typeList}
    </div>
  )
}
export default MenuContainer;