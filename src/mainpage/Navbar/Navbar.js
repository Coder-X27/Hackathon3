import React, { Component } from "react";
import { Button } from "../Button";
import { MenuItems } from "./MenuItems";
import "./Navbar.css";
// import {Button} from '../Button'
class Navbar extends Component {

  state ={ clicked:false}

  handleClick=()=>{
    this.setState({clicked:!this.state.clicked})
  }

  render() {
    return (
      <nav className="NavbarItems">
         <img src="./img4.svg" alt="" />
        <div className="menu-icon" onClick={this.handleClick}>
          <i className={this.state.clicked ? 'fas fa-times':'fas fa-bars'}></i>
        </div>
        <ul className={this.state.clicked ? 'nav-menu active':'nav-menu'}>
        <div className="search-bar">
          <input type="text" placeholder="Search" className="search"/>
          <a href="#" className="search-logo"><i class="uil uil-search"></i></a>
        </div>
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <a className={item.cName} href={item.url}>
                  {item.title}
                </a>
              </li>
            );
          })}
        </ul>
        <div className="searchbar">
          <input type="text" placeholder="Search" className="search"/>
          <a href="#" className="search-logo"><i class="uil uil-search"></i></a>
        </div>
      </nav>
    );
  }
}

export default Navbar;
