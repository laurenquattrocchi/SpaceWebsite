import React from 'react';
import Layout2 from '../components/Layout/Layout2';
import { useLocation } from 'react-router-dom'
import {planet_info} from '../planetsObject.js' ;

// class PlanetInfo extends React.Component {

function PlanetInfo () {
    // render() 
    const location = useLocation()
    const { planet } = location.state
    var info = planet_info(planet)
    console.log('state', planet)
    {
      return (
        <>
          <Layout2>
            <h1>
                Info Page: {planet}
            </h1>
            <table>
            <thead>
                <td>Additional Information</td>
                <td>Fun Fact</td>
                <td>Distance to Sun</td>
                <td>Trip around the Sun</td>
                <td>Temperatures</td>         
            </thead>
                <tbody>
                {info.map((fact)=> <td>{fact}</td>)};
                </tbody>
            </table>
          </Layout2>
        </>
    )}
       }

export default PlanetInfo;