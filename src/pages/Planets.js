import React from 'react';
import Layout2 from '../components/Layout/Layout2';
import mars from './images/mars.jfif';
import earth from './images/earth.jfif';
import moon from './images/moon.jfif';
import sun from './images/sun.jfif';
import jupiter from './images/jupiter.jfif';
import venus from './images/venus.jfif';
import uranus from './images/uranus.jpg';
import neptune from './images/neptune.jfif';
import saturn from './images/saturn.jfif';
import mercury from './images/mercury.jfif';
import "../index.css";
import { Link } from "react-router-dom";

class Planets extends React.Component {
  render() {
    return (
      <>
        <Layout2>
          <h1>
              Planets Page
          </h1>
          
          <p> click the planet name to learn more (bonus sun and moon)</p>
          <div id="planets">
            <figure>
                <img classname="planetimg" name="earth" src={earth} alt="earth" />
                <figcaption> <Link to="/planetinfo" state={{ planet: "Earth" }}>Earth</Link> </figcaption>
            </figure>

            <figure>
                <img classname="planetimg" name="venus" src={venus} alt="venus" />
                <figcaption> <Link to="/planetinfo" state={{ planet: "Venus" }}>Venus</Link>  </figcaption>
            </figure>
            
            <figure>
                <img classname="planetimg" name="jupiter" src={jupiter} alt="jupiter" />
                <figcaption><Link to="/planetinfo" state={{ planet: "Jupiter" }}>Jupiter</Link> </figcaption>
            </figure>
            
            <figure>
                <img classname="planetimg" name="uranus" src={uranus} alt="uranus" />
                <figcaption> <Link to="/planetinfo" state={{ planet: "Uranus" }}>Uranus</Link>  </figcaption>
            </figure>
            
            <figure>
                <img classname="planetimg" name="mars" src={mars} alt="mars" />
                <figcaption> <Link to="/planetinfo" state={{ planet: "Mars" }}>Mars</Link>  </figcaption>
            </figure>
            
            
            <figure>
                <img classname="planetimg" name="saturn" src={saturn} alt="saturn" />
                <figcaption> <Link to="/planetinfo" state={{ planet: "Saturn" }}>Saturn</Link>  </figcaption>
            </figure>

            <figure>
                <img classname="planetimg" name="neptune" src={neptune} alt="neptune" />
                <figcaption><Link to="/planetinfo" state={{ planet: "Neptune" }}>Neptune</Link>  </figcaption>
            </figure>

            <figure>
                <img classname="planetimg" name="mercury" src={mercury} alt="mercury" />
                <figcaption> <Link to="/planetinfo" state={{ planet: "Mercury" }}>Mercury</Link>  </figcaption>
            </figure>

            <figure>
                <img classname="planetimg" name="sun" src={sun} alt="sun" />
                <figcaption><Link to="/planetinfo" state={{ planet: "Sun" }}>Sun</Link> </figcaption>
            </figure>

            <figure>
                <img classname="planetimg" name="moon" src={moon} alt="moon" />
                <figcaption> <Link to="/planetinfo" state={{ planet: "Moon" }}>Moon</Link>  </figcaption>
            </figure>
          </div>
          <h6> Disclaimer: Majority of information curated from: https://nineplanets.org/mercury/</h6>
        </Layout2>
      </>
    );
  }
}
export default Planets;