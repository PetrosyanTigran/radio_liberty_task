import { useState } from 'react';
import { useHistory } from 'react-router-dom';

const AddColorItem = () => {
  const [text, setText] = useState('');
  let history = useHistory();
  return (
    <form
      className="input-group mb-3"
      onSubmit={(e) => {
        e.preventDefault();
        if (!text) {
          alert('Cannot accept an empty string');
        } else {
          history.push(`${history.location.pathname},${text}`);
        }
        setText('');
      }}
    >
      <input
        type="text"
        className="form-control"
        placeholder="Type the color you like..."
        aria-label="Type the color you like..."
        aria-describedby="button-addon2"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button className="btn btn-primary ml-2" type="submit">
        Add Color
      </button>
    </form>
  );
};

export default AddColorItem;
