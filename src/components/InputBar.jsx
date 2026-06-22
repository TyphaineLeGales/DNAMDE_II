function InputBar(props) {
  return (
    <div className="nav">
      <input
        onChange={props.valueChange}
        name="input-bar"
        className="input-bar"
        type="text"
        placeholder="Search a movie"
      ></input>
    </div>
  );
}

export default InputBar;
