import React from "react";
import { Link } from "react-router-dom";

class Header extends React.Component {
  render() {
    return(
      <header>
        <p className="header"> Planet information <Link to="/planets">Here</Link> </p>
        <p className="header"> Space related definitions <Link to="/vocab">Here</Link></p>
        <p className="header"> Space Photo of the Day <Link to="/POD">Here</Link> </p>
      </header>
    );
  }
}
export default Header;