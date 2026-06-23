import { useState } from "react";

function Tag({tag, onSelect}) {
  const [active, isActive] = useState(false);

  const handleClick = (event) => {

      const newActive = !active;
      isActive(newActive);
      onSelect(tag, newActive);
  };

  return (
    <button
      onClick={handleClick}
      className={active ? "tag-btn active" : "tag-btn"}
    >
      {tag}
    </button>
  );
}

export default Tag;
