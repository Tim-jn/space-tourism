import { NavLink } from 'react-router-dom'
import Header from '../../Components/Header/Header'
import Planet from '../../Components/Planet/Planet'
import './destination.css'
import moon from './image-moon.png'

export default function Destination() {
  return (
    <main className="destinationMain">
      <Header />
      <h2 className="destinationTitle">
        <span className="destinationNumber">01</span>PICK YOUR DESTINATION
      </h2>
      <div className="destinationContent">
        <div className="planetListContent">
          <div className="emptyContent"></div>
          <ul className="planetList">
            <li className="planet moon">MOON</li>
            <li className="planet mars">MARS</li>
            <li className="planet europa">EUROPA</li>
            <li className="planet titan">TITAN</li>
          </ul>
        </div>
        <Planet
          planetImage={moon}
          planetName="MOON"
          planetDesc="See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites."
          planetDist="384,400 KM"
          travelTime="3 DAYS"
        />
      </div>
    </main>
  )
}
