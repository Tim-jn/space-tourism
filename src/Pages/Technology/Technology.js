import Header from '../../Components/Header/Header'
import TechnologyContent from '../../Components/TechnologyContent/TechnologyContent'
import './technology.css'
import datas from '../../Data/data.json'
import launch from './image-launch-vehicle-portrait.jpg'
import capsule from './image-space-capsule-portrait.jpg'
import spacePort from './image-spaceport-portrait.jpg'
import launchRes from './image-launch-vehicle-landscape.jpg'
import capsuleRes from './image-space-capsule-landscape.jpg'
import spacePortRes from './image-spaceport-landscape.jpg'
import { useState, useEffect } from 'react'

export default function Technology() {
  const techData = datas.technology.map((data) => {
    return data
  })

  const [matches, setMatches] = useState(false)

  useEffect(() => {
    const media = window.matchMedia('(max-width: 1025px)')
    if (media.matches !== matches) {
      setMatches(media.matches)
    }
    const listener = () => setMatches(media.matches)
    window.addEventListener('resize', listener)
    return () => window.removeEventListener('resize', listener)
  }, [matches])

  const [tech1, setTech1] = useState(true)
  const [tech2, setTech2] = useState(false)
  const [tech3, setTech3] = useState(false)

  const tech1DisplayOnly = () => {
    setTech1(true)
    setTech2(false)
    setTech3(false)
  }

  const tech2DisplayOnly = () => {
    setTech1(false)
    setTech2(true)
    setTech3(false)
  }

  const tech3DisplayOnly = () => {
    setTech1(false)
    setTech2(false)
    setTech3(true)
  }

  return (
    <main className="technologyMain">
      <Header />
      <h2 className="sharedTitle">
        <span className="sharedNumber">03</span>SPACE LAUNCH 101
      </h2>
      <div className="techSlides">
        <ul>
          <li
            onClick={tech1DisplayOnly}
            className={tech1 ? 'techSlide-active' : 'techSlide'}
          >
            1
          </li>
          <li
            onClick={tech2DisplayOnly}
            className={tech2 ? 'techSlide-active' : 'techSlide'}
          >
            2
          </li>
          <li
            onClick={tech3DisplayOnly}
            className={tech3 ? 'techSlide-active' : 'techSlide'}
          >
            3
          </li>
        </ul>
      </div>
      <section className="techSection">
        {tech1 ? (
          <TechnologyContent
            techTitle={techData[0].name}
            techDesc={techData[0].description}
            image={!matches ? launch : launchRes}
          />
        ) : tech2 ? (
          <TechnologyContent
            techTitle={techData[1].name}
            techDesc={techData[1].description}
            image={!matches ? spacePort : spacePortRes}
          />
        ) : tech3 ? (
          <TechnologyContent
            techTitle={techData[2].name}
            techDesc={techData[2].description}
            image={!matches ? capsule : capsuleRes}
          />
        ) : (
          ''
        )}
      </section>
    </main>
  )
}
