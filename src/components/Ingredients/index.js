import PropTypes from 'prop-types';
import Ingredient from './Ingredient';

import './styles.scss';

const Ingredients = ({ ingredients }) => (
  <ul className="ingredients">
    {
      // eslint-disable-next-line max-len
      ingredients.map((ingredient) => (
        <Ingredient
          key={ingredient.id}
          {...ingredient}
        />
      ))
    }
  </ul>
);

export default Ingredients;

Ingredients.propTypes = {
  ingredients: PropTypes.array.isRequired,
};
