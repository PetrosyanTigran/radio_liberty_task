import ColorList from './ColorList';
import AddColorItem from './AddColorItem';
import { useState } from 'react';

const App = () => {
  const [colors, setColors] = useState(['black', 'white', 'cherry']);
  return (
    <div
      className="card border-primary mb-3"
      style={{ margin: '25rem auto 0 auto', maxWidth: '400px' }}
    >
      <AddColorItem />
      <ColorList colors={colors} />
    </div>
  );
};

export default App;
