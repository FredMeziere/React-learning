// == Import
import Header from '../Header';
import Ingredients from '../Ingredients';
import Instructions from '../Instructions';
import './styles.css';

import data from '../../../data/recipes';

// == Composant
const App = () => (
  <div className="container">
    <Header
      title={data.title}
      author={data.author}
      difficulty={data.difficulty}
      thumbnail={data.thumbnail}
    />
    <Ingredients ingredients={data.ingredients} />
    <Instructions instructions={data.instructions} />
  </div>
);
// == Export
export default App;
