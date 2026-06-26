import ThemeSelect from "./ThemeSelect";
import { useEffect, useRef } from "react";

function InputBar(props) {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
    console.log(inputRef.current);
  }, []);

  return (
    <div className="nav">
      <input
        ref={inputRef}
        onChange={props.valueChange}
        name="input-bar"
        className="input-bar"
        type="text"
        placeholder="Search a movie"
      ></input>
      <ThemeSelect />
    </div>
  );
}

export default InputBar;
