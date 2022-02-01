import './crewContent.css'

export default function CrewContent(props) {
  return (
    <>
      <div className="crewTextContent">
        <h3 className="crewFunction">{props.crewFunc}</h3>
        <h1 className="crewName">{props.crewName}</h1>
        <p className="crewDescription">{props.crewDesc}</p>
      </div>
      <img src={props.image} alt="Crew member" className="crewImage" />
    </>
  )
}
