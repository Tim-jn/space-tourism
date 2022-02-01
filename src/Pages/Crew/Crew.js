import Header from '../../Components/Header/Header'
import CrewContent from '../../Components/Crew/CrewContent'
import './crew.css'

export default function Crew() {

  const data = 
  return (
    <main className="crewMain">
      <Header />
      <h2 className="sharedTitle">
        <span className="sharedNumber">01</span>MEET YOUR CREW
      </h2>
      <CrewContent />
    </main>
  )
}
