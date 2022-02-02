import './technologyContent.css'

export default function TechnologyContent(props) {
  return (
    <>
      <div className="techContent">
        <p className="smallTitle">THE TERMINOLOGY...</p>
        <h1 className="techTitle">{props.techTitle}</h1>
        <p className="techDescription">{props.techDesc}</p>
      </div>
      <img src={props.image} alt="Transport technology" className="techImage" />
    </>
  )
}
