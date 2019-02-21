import React from "react";
import main_img from "../partner-04.png";
import logo from "../logo.svg";
export class Header extends React.Component {
  render() {
    let serach_word = "";
    let bla = "";
    var logo_title = "ReactJs";
    if (true) {
      serach_word = "Search";
      bla = "Search";
    }
    return (
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar navbar-brand">
          <img className="logo img-fluid w-75" src={logo} />|{logo_title}
        </a>
        <form className="form-inline">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <input
            className="btn btn-outline-primary my-2 my-sm-0"
            type="submit"
            value={serach_word}
          />
        </form>
      </nav>
    );
  }
}
