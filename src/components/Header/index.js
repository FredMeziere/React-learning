import './styles.scss';

const Header = ({
  title,
  author,
  difficulty,
  thumbnail
}) => (
  <header className="header">
    <img
      src={ thumbnail }
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
