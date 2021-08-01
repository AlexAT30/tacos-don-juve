import Title from "./Title";
import PromotionsInfo from "./PromotionsInfo";
import promotionData from "../promotionData";

const PromotionsContainer = () => {
  const promotionList = promotionData.map ((element, index) => {
    return <PromotionsInfo key={index} name={element.name} description={element.description} price={element.price} />
  })
  return (
    <div className='container-fluid'>
      <Title title='Promociones' id='promotions' />
      <div style={
        {
          display: 'flex',
          overflow: 'scroll',
        }
      }>
        {promotionList}
      </div>
      
    </div>
  )
}
export default PromotionsContainer;