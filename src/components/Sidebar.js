import logo from "../img/logo.svg";
import { Icon } from "./Icons";
import Menu from "./Sidebar/Menu";
import Collection from "./Sidebar/Collection";
import Playlist from "./Sidebar/Playlist";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <NavLink to="/" className="logo">
        <img src={logo} className="h-10 mb-6" alt="Spotify" />
      </NavLink>

      <Menu />
      <Collection />
      <Playlist />
      <div className="install-app">
        <span>
          <Icon name="download" size={18} />
        </span>
        Install App
      </div>
    </aside>
  );
};

export default Sidebar;
