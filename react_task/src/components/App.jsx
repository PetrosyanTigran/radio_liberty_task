import ColorList from './ColorList';
import AddColorItem from './AddColorItem';
import { Switch, Route } from 'react-router-dom';
import '../app.css';
import ColorListItem from './ColorListItem';

const App = () => {
  return (
    <div className="card border-primary mb-3 central_container">
      <AddColorItem />
      <Switch>
        <Route path="/tags=:tags" children={<ColorList />} />
        <Route path="/" children={<ColorListItem />} />
      </Switch>
    </div>
  );
};

export default App;
