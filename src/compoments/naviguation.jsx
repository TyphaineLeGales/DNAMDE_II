import { NavLink } from "react-router";

function Naviguation() {
  return (
    <nav>
      <NavLink to="/explore" end>Explore</NavLink>
      <NavLink to="/favorite" end>Favorite</NavLink>
    </nav>
  )
}

export default Naviguation;