import { useState } from 'react'
import Header from '../../Components/Header/Header'
import Planet from '../../Components/Planet/Planet'
import './destination.css'
import moon from './image-moon.png'
import mars from './image-mars.png'
import europa from './image-europa.png'
import titan from './image-titan.png'

export default function Destination() {
  const [moonDisplay, setMoonDisplay] = useState(true)
  const [marsDisplay, setMarsDisplay] = useState(false)
  const [europaDisplay, setEuropaDisplay] = useState(false)
  const [titanDisplay, setTitanDisplay] = useState(false)

  const moonDisplayOnly = () => {
    setMoonDisplay(true)
    setMarsDisplay(false)
    setEuropaDisplay(false)
    setTitanDisplay(false)
  }

  const marsDisplayOnly = () => {
    setMoonDisplay(false)
    setMarsDisplay(true)
    setEuropaDisplay(false)
    setTitanDisplay(false)
  }

  const europaDisplayOnly = () => {
    setMoonDisplay(false)
    setMarsDisplay(false)
    setEuropaDisplay(true)
    setTitanDisplay(false)
  }

  const titanDisplayOnly = () => {
    setMoonDisplay(false)
    setMarsDisplay(false)
    setEuropaDisplay(false)
    setTitanDisplay(true)
  }

  return (
    <main className="destinationMain">
      <Header />
      <h2 className="sharedTitle">
        <span className="sharedNumber">01</span>PICK YOUR DESTINATION
      </h2>
      <div className="destinationContent">
        <div className="planetListContent">
          <div className="emptyContent"></div>
          <ul className="planetList">
            <li
              onClick={moonDisplayOnly}
              className={moonDisplay ? 'planet-active moon' : 'planet moon'}
            >
              MOON
            </li>
            <li
              onClick={marsDisplayOnly}
              className={marsDisplay ? 'planet-active mars' : 'planet mars'}
            >
              MARS
            </li>
            <li
              onClick={europaDisplayOnly}
              className={
                europaDisplay ? 'planet-active europa' : 'planet europa'
              }
            >
              EUROPA
            </li>
            <li
              onClick={titanDisplayOnly}
              className={titanDisplay ? 'planet-active titan' : 'planet titan'}
            >
              TITAN
            </li>
          </ul>
        </div>
        {moonDisplay ? (
          <Planet
            planetImage={moon}
            planetName="MOON"
            planetDesc="See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites."
            planetDist="384,400 KM"
            travelTime="3 DAYS"
          />
        ) : marsDisplay ? (
          <Planet
            planetImage={mars}
            planetName="MARS"
            planetDesc="Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!"
            planetDist="225 MIL. KM"
            travelTime="9 MONTHS"
          />
        ) : europaDisplay ? (
          <Planet
            planetImage={europa}
            planetName="EUROPA"
            planetDesc="The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin."
            planetDist="628 MIL. KM"
            travelTime="3 YEARS"
          />
        ) : titanDisplay ? (
          <Planet
            planetImage={titan}
            planetName="TITAN"
            planetDesc="The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn."
            planetDist="1.6 BIL KM"
            travelTime="7 YEARS"
          />
        ) : (
          ''
        )}
      </div>
    </main>
  )
}
