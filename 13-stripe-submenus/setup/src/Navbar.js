import React from "react";
import logo from "./images/logo.svg";
import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "./context";

const Navbar = () => {
  const { openSidebar, closeSubmenu, openSubmenu } = useGlobalContext();
  const displaySubMenu = (e) => {
    const page = e.target.textContent;
    const tempbtn = e.target.getBoundingClientRect();
    console.log(page, tempbtn);
    const center = (tempbtn.left + tempbtn.right) / 2;
    const bottom = tempbtn.bottom - 3;
    openSubmenu(page, { center, bottom });
  };


const handleSubMenu=(e)=>{
if(!e.target.classList.contains('link-btn')){
  closeSubmenu()
}
}


  return (
    <nav className="nav" onMouseOver={handleSubMenu}>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="" className="nav-logo" />
          <button className="btn toggle-btn" onClick={openSidebar}>
            <FaBars />
          </button>
        </div>
        <ul className="nav-links">
          <li>
            <button className="link-btn" onMouseOver={displaySubMenu}>
              products
            </button>
          </li>
          <li>
            <button className="link-btn" onMouseOver={displaySubMenu}>
              developers
            </button>
          </li>
          <li>
            <button className="link-btn" onMouseOver={displaySubMenu}>
              company
            </button>
          </li>
        </ul>
        <button className="btn signin-btn" onMouseOver={displaySubMenu}>
          Sign In
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
