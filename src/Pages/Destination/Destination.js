import { useState } from 'react'
import Header from '../../Components/Header/Header'
import Planet from '../../Components/Planet/Planet'
import './destination.css'
import moon from './image-moon.png'
import mars from './image-mars.png'
import europa from './image-europa.png'
import titan from './image-titan.png'
import datas from '../../Data/data.json'

export default function Destination() {
  const planetData = datas.destinations.map((data) => {
    return data
  })

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
            planetName={planetData[0].name}
            planetDesc={planetData[0].description}
            planetDist={planetData[0].distance}
            travelTime={planetData[0].travel}
          />
        ) : marsDisplay ? (
          <Planet
            planetImage={mars}
            planetName={planetData[1].name}
            planetDesc={planetData[1].description}
            planetDist={planetData[1].distance}
            travelTime={planetData[1].travel}
          />
        ) : europaDisplay ? (
          <Planet
            planetImage={europa}
            planetName={planetData[2].name}
            planetDesc={planetData[2].description}
            planetDist={planetData[2].distance}
            travelTime={planetData[2].travel}
          />
        ) : titanDisplay ? (
          <Planet
            planetImage={titan}
            planetName={planetData[3].name}
            planetDesc={planetData[3].description}
            planetDist={planetData[3].distance}
            travelTime={planetData[3].travel}
          />
        ) : (
          ''
        )}
      </div>
    </main>
  )
}
