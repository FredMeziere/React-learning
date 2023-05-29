import PropTypes from 'prop-types';
import './styles.scss';

const Header = ({
  title,
  author,
  difficulty,
  thumbnail,
}) => (
  <header className="header">
    <img
      src={thumbnail}
      alt="Crepes"
      className="header-image"
    />
    <div className="header-content">
      <h1 className="header-title">{ title }</h1>
      <p className="header-info">
        { author } - { difficulty }
      </p>
    </div>
  </header>
);

export default Header;

Header.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  difficulty: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
};
