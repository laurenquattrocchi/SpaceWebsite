import React from "react"
import Header2 from "./Header/Header2"

class Layout2 extends React.Component {
  render(){
    return (
      <>
        <Header2 />
        <main>{this.props.children}</main>
      </>
    )
  }
}
export default Layout2;