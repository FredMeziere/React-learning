import PropTypes from 'prop-types';
import './styles.scss';

const Instructions = ({ instructions }) => (
  <ul className="steps">
    {
        instructions.map((instruction) => <li key={instruction} className="step">{ instruction }</li>)
    }
  </ul>
);

export default Instructions;

Instructions.propTypes = {
  instructions: PropTypes.array.isRequired,
};
