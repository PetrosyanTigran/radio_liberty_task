import ColorList from './ColorList';
import AddColorItem from './AddColorItem';
import { Switch, Route } from 'react-router-dom';
import '../app.css';

const App = () => {
  return (
    <div
      className="card border-primary mb-3"
      style={{ margin: '8rem auto 0 auto', maxWidth: '400px' }}
    >
      <AddColorItem />
      <Switch>
        <Route path="/tags=:tags" children={<ColorList />} />
      </Switch>
    </div>
  );
};

export default App;
