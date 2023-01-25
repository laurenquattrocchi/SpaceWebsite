import React from 'react';
import Layout2 from '../components/Layout/Layout2';

class Vocab extends React.Component {
  render() {
    return (
      <>
        <Layout2>
          <h1>
            Vocab Page
          </h1>
          <table>
            <thead>
            <tr>
                <th>Word</th>
                <th>Definition</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>Aphelion</td>
                <td>the point in the orbit of a planet, asteroid, or comet at which it is furthest from the sun</td>

            </tr>
            <tr>
                <td>Terrestrial planets</td>
                <td> A terrestrial planet, telluric planet, or rocky planet, is a planet that is composed primarily of 
                    silicate rocks or metals. Within the Solar System, the terrestrial planets accepted by the IAU are 
                    the inner planets closest to the Sun: Mercury, Venus, Earth and Mars.</td>

            </tr>
            <tr>
                <td>Dwarf planet</td>
                <td> a dwarf planet is a celestial body that -orbits the sun, has enough mass to assume a nearly round 
                    shape, has not cleared the neighborhood around its orbit and is not a moon</td>

            </tr>
            <tr>
                <td>Kuiper Belt</td>
                <td>a region of the solar system beyond the orbit of Neptune, believed to contain many comets, asteroids,
                     and other small bodies made largely of ice.</td>

            </tr>
            <tr>
                <td>Solar Eclipse</td>
                <td>A solar eclipse occurs when the Moon passes between Earth and the Sun, thereby obscuring Earth's 
                    view of the Sun, totally or partially.</td>

            </tr>
            <tr>
                <td>New Moon</td>
                <td>In astronomy, the new moon is the first lunar phase, when the Moon and Sun have the same ecliptic longitude. 
                    At this phase, the lunar disk is not visible to the naked eye, except when it is silhouetted against the Sun 
                    during a solar eclipse.</td>
            </tr>
            <tr>
                <td>Asteroid</td>
                <td>An asteroid is a relatively small chunk of rocky minerals that orbits the Sun, often described as a minor planet. </td>
            </tr>
            <tr>
                <td>Asteroid belt</td>
                <td>The asteroid belt is located between the inner and the outer planets and is home to thousands of rocks and debris 
                    known as asteroids and some of the dwarf planets. </td>
            </tr>
            <tr>
                <td>Comet</td>
                <td>Comets are frozen leftovers from the formation of the solar system composed of dust, rock, and ices. They range 
                    from a few miles to tens of miles wide, but as they orbit closer to the Sun, they heat up and spew gases and dust 
                    into a glowing head that can be larger than a planet. This material forms a tail that stretches millions of miles.</td>
            </tr>
            <tr>
                <td>Lunar eclipse</td>
                <td>Lunar eclipses occur at the full moon phase. When Earth is positioned precisely between the Moon and Sun</td>
            </tr>
            <tr>
                <td>Solar Nebula</td>
                <td>The solar nebula was the rotating, flattened disk of gas and dust from which the solar system originated.</td>
            </tr>
            </tbody>
            </table>
        </Layout2>
      </>
    );
  }
}
export default Vocab;