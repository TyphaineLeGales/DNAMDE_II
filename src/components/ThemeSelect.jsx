import { useState } from "react";

function ThemeSelect() {
  const [active, setActive] = useState(true);
  const themeActive = ["Light", "Dark"];

  const handleClick = (event) => {
    event.preventDefault();
    setActive((active) => !active);

    if (active) {
      document.body.classList.add("dark-theme");
      document.body.classList.remove("light-theme");
    } else {
      document.body.classList.add("light-theme");
      document.body.classList.remove("dark-theme");
    }
  };

  return (
    <button onClick={handleClick} className="theme-select-btn">
      {active ? themeActive[0] : themeActive[1]}
    </button>
  );
}

export default ThemeSelect;
