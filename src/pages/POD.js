import React from 'react';
import Layout2 from '../components/Layout/Layout2';
import Header2 from "../components/Layout/Header/Header2";

class POD extends React.Component {
    constructor() {
        super();
        this.state = {
            url:"",
            explanation:"",
            num:"",
        };
    }

    componentDidMount() {
        fetch("https://api.nasa.gov/planetary/apod?api_key=zggIQFYezWMNrOzqBqdAH2ZNfNj1GUHZpJFilef0").then(
            response => {
                console.log('response', response);
                if (!response.ok) {
                    throw Error("Error fetiching image")
                }
                return response.json().then(allData => {
                    console.log(allData['url'])
                    this.setState({url:allData['url'], explanation: allData['explanation']})
                }).catch(err => {
                    throw Error(err.message);
                })
            }
        )

    }


    render () {
        return (
            <>
            <Layout2>
                    <figure>
                    <img className="POD" src={this.state.url} alt="Photo of Day" />
                        <figcaption className="POD"> {this.state.explanation} </figcaption>
                    </figure>
            </Layout2>
            </>
        );
    }
}
    export default POD;