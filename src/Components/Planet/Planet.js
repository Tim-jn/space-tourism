import './planet.css'

export default function Planet(props) {
  return (
    <section className="planetContent">
      <img src={props.planetImage} alt="Planet" className="planetImage" />
      <div className="textContentPlanet">
        <h1 className="planetName">{props.planetName}</h1>
        <p className="planetDescription">{props.planetDesc}</p>
        <div className="belowTextPlanet">
          <div className="planetDistance">
            <p className="distance">AVG. DISTANCE</p>
            {props.planetDist}
          </div>
          <div className="travelTime">
            <p className="time">EST. TRAVEL TIME</p>
            {props.travelTime}
          </div>
        </div>
      </div>
    </section>
  )
}
