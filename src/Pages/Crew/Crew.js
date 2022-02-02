import Header from '../../Components/Header/Header'
import CrewContent from '../../Components/CrewContent/CrewContent'
import datas from '../../Data/data.json'
import douglas from './image-douglas-hurley.png'
import anousheh from './image-anousheh-ansari.png'
import mark from './image-mark-shuttleworth.png'
import victor from './image-victor-glover.png'
import './crew.css'
import { useState } from 'react'

export default function Crew() {
  const crewData = datas.crew.map((data) => {
    return data
  })

  const [crew1, setcrew1] = useState(true)
  const [crew2, setcrew2] = useState(false)
  const [crew3, setcrew3] = useState(false)
  const [crew4, setcrew4] = useState(false)

  const crew1DisplayOnly = () => {
    setcrew1(true)
    setcrew2(false)
    setcrew3(false)
    setcrew4(false)
  }

  const crew2DisplayOnly = () => {
    setcrew1(false)
    setcrew2(true)
    setcrew3(false)
    setcrew4(false)
  }

  const crew3DisplayOnly = () => {
    setcrew1(false)
    setcrew2(false)
    setcrew3(true)
    setcrew4(false)
  }

  const crew4DisplayOnly = () => {
    setcrew1(false)
    setcrew2(false)
    setcrew3(false)
    setcrew4(true)
  }

  return (
    <main className="crewMain">
      <Header />
      <h2 className="sharedTitle">
        <span className="sharedNumber">02</span>MEET YOUR CREW
      </h2>
      <div className="slides">
        <ul className="listSlides">
          <li
            onClick={crew1DisplayOnly}
            className={crew1 ? 'crewMember-active' : 'crewMember'}
          ></li>
          <li
            onClick={crew2DisplayOnly}
            className={crew2 ? 'crewMember-active' : 'crewMember'}
          ></li>
          <li
            onClick={crew3DisplayOnly}
            className={crew3 ? 'crewMember-active' : 'crewMember'}
          ></li>
          <li
            onClick={crew4DisplayOnly}
            className={crew4 ? 'crewMember-active' : 'crewMember'}
          ></li>
        </ul>
        <div className="emptyContent"></div>
      </div>
      <section className="crewSection">
        {crew1 ? (
          <CrewContent
            crewFunc={crewData[0].role}
            crewName={crewData[0].name}
            crewDesc={crewData[0].bio}
            image={douglas}
          />
        ) : crew2 ? (
          <CrewContent
            crewFunc={crewData[1].role}
            crewName={crewData[1].name}
            crewDesc={crewData[1].bio}
            image={mark}
          />
        ) : crew3 ? (
          <CrewContent
            crewFunc={crewData[2].role}
            crewName={crewData[2].name}
            crewDesc={crewData[2].bio}
            image={victor}
          />
        ) : crew4 ? (
          <CrewContent
            crewFunc={crewData[3].role}
            crewName={crewData[3].name}
            crewDesc={crewData[3].bio}
            image={anousheh}
          />
        ) : (
          ''
        )}
      </section>
    </main>
  )
}
