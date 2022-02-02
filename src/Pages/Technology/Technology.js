import Header from '../../Components/Header/Header'
import TechnologyContent from '../../Components/TechnologyContent/TechnologyContent'
import './technology.css'
import datas from '../../Data/data.json'
import launch from './image-launch-vehicle-portrait.jpg'
import { useState } from 'react'

export default function Technology() {
  const techData = datas.technology.map((data) => {
    return data
  })

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
            image={launch}
          />
        ) : tech2 ? (
          <TechnologyContent
            techTitle={techData[1].name}
            techDesc={techData[1].description}
            image={launch}
          />
        ) : tech3 ? (
          <TechnologyContent
            techTitle={techData[2].name}
            techDesc={techData[2].description}
            image={launch}
          />
        ) : (
          ''
        )}
      </section>
    </main>
  )
}
