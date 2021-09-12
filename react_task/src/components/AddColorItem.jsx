const AddColorItem = () => {
  return (
    <form className="input-group mb-3">
      <input
        type="text"
        className="form-control"
        placeholder="Type the color you like..."
        aria-label="Type the color you like..."
        aria-describedby="button-addon2"
      />
      <button className="btn btn-primary" type="submit">
        Add Color
      </button>
    </form>
  );
};

export default AddColorItem;
