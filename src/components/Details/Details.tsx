import { FrutsQuantities } from '../../App';
import { Wrapper } from './Details.styles';

type Props = {
  item: FrutsQuantities;
}

const Details: React.FC<Props> = ({item}) => (
  <Wrapper>
    <div>
     <h1>Nutritional Values of {item.name}</h1>
     <h3>{item.nutritions.carbohydrates}</h3>
     <h3>{item.nutritions.calories}</h3>
     <h3>{item.nutritions.fat}</h3>
     <h3>{item.nutritions.protein}</h3>
     <h3>{item.nutritions.sugar}</h3>
     </div>
  </Wrapper>
);

export default Details;