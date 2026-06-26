import { NavLink } from "react-router";
import './NavHeader.css'

export default function NavHeader() {
  return (
    <nav id="navigation">
      <NavLink to="/">Explore</NavLink>
      <NavLink to="/favourites">Favourites</NavLink>
    </nav>
  )
}
