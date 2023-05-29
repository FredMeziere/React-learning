// == Import
import Header from '../Header';
import './styles.css';

// == Composant
const App = () => {
  const thumbnail = 'https://images.pexels.com/photos/53483/strawberries-crepe-dessert-sweet-53483.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';

  return (
    <div className="container">
      <Header
        title="Crepes rafinées"
        author="Jhon Deuf"
        difficulty="Facile"
        thumbnail={thumbnail}
      />
    </div>
  );
};
// == Export
export default App;
