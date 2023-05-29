import PropTypes from 'prop-types';

const Ingredient = ({
  quantity,
  unit,
  name,
}) => (
  <li className="ingredient">
    <span className="ingredient-quantity"> {quantity} {unit} </span> {name}
  </li>
);

export default Ingredient;

Ingredient.propTypes = {
  quantity: PropTypes.number.isRequired,
  unit: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
