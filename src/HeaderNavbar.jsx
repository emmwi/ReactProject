import { Link } from "react-router-dom";
import "./HeaderNavbar.css";
import { ListItemLink } from "./StyledComponents";
import ThemeChange from "./ThemeChange";

function HeaderNavbar() {
  return (
    <>
      <header>
        <nav>
          <h1 id="nav-header">Gul Bil</h1>
          <ul id="links">
            <div id="list-item">
              <ListItemLink>
                <Link to="/">Rules</Link>
              </ListItemLink>
              <ListItemLink>
                <Link to="/memory">Memory</Link>
              </ListItemLink>
              <ListItemLink>
                <Link to="/login">Log In</Link>
              </ListItemLink>
            </div>
            <div id="theme-btn">
              <ThemeChange />
            </div>
          </ul>
        </nav>
      </header>
    </>
  );
}
export default HeaderNavbar;
