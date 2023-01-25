import React from "react";
import "./index.css";
import Layout from './components/Layout/Layout';
import Header from "./components/Layout/Header/Header";

class App extends React.Component  {
    constructor() {
        super();
        this.state = {
            url:"",
            explanation:"",
            num:"",
        };
    }


    componentDidMount() {
        fetch ("http://api.open-notify.org/astros.json").then(
            response => {
                console.log('response', response);
                if (!response.ok) {
                    throw Error("Error fetiching image")
                }
                return response.json().then(allData => {
                    console.log(allData['number'])
                    this.setState({num:allData['number']})
                }).catch(err => {
                    throw Error(err.message);
                })
            }
        )
    }


    render () {
        var today = new Date();
        var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
        return (
            <>
            <Layout>
                <h1> Today is {date} and there are {this.state.num} people currently in space!!</h1>
                <Header/>
            </Layout>
            </>
        );
}
}

export default App;