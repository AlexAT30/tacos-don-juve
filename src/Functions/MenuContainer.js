import MenuInfo from '../componets/MenuInfo';
import menuData from '../menuData';

const MenuContainer = () => {

  const typeList = menuData.map ((item, index) => {
    return <MenuInfo key={index} type={item.category} number={index} />
  })

  console.log(menuData);
  return (
    <div>
      {typeList}
    </div>
  )
}
export default MenuContainer;