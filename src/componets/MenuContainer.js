import MenuInfo from './MenuInfo';
import ProductInfo from './ProductInfo';
import menuData from '../menuData';

const MenuContainer = () => {
  // Pinta las categorias
  const typeList = menuData.map ((item, index) => {
    // Pinta los productos en su categoria correspondiente
    const productsList = menuData[index].products.map ((item, index) => {
      return <ProductInfo key={`P${index}${Math.floor (Math.random () * 10000)}`} name={item.name} description={item.description} />
    })
    return <MenuInfo key={`C${index}`} type={item.category} number={index} products={productsList} />
  })

  console.log(menuData);
  return (
    <div>
      {typeList}
    </div>
  )
}
export default MenuContainer;