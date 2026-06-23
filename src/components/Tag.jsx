import { useState } from "react";

function Tag(props) {
  const [active, isActive] = useState(false);

  const handleClick = () => {
    isActive(active => !active);
    console.log(active);
  };

  return (
    <button
      onClick={handleClick}
      className={active ? "tag-btn active" : "tag-btn"}
    >
      {props.tag}
    </button>
  );
}

export default Tag;
