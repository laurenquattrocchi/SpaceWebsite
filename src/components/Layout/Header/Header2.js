import React from "react";
import { Link } from "react-router-dom";

class Header2 extends React.Component {
  render() {
    return(
      <header>
        <Link to="/">Home</Link> | <Link to="/planets">Planets</Link> | <Link to="/Vocab">Vocab</Link> | <Link to="/POD">Photo of the Day</Link>
      </header>
    );
  }
}
export default Header2;