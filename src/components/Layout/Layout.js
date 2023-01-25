import React from "react"
import Header from "./Header/Header"
import image from  "../../pages/images/background.jpg"

class Layout extends React.Component {
    render(){
        console.log(this.props.children)
    return (
      <>
          <main>{this.props.children}</main>
      </>
    )
  }
}
export default Layout;