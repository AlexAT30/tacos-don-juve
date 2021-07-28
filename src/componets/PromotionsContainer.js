import Title from "./Title";
import PromotionsInfo from "./PromotionsInfo";
import promotionData from "../promotionData";

const PromotionsContainer = ({ setProducts }) => {
  const promotionList = promotionData.map ((element, index) => {
    return <PromotionsInfo key={index} setProducts={setProducts} name={element.name} description={element.description} price={element.price} />
  })
  return (
    <div className='container-fluid'>
      <Title title='Promociones' id='promotions' />
      {promotionList}
      
    </div>
  )
}
export default PromotionsContainer;