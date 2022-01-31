import Header from '../../Components/Header/Header'
import { Link } from 'react-router-dom'
import './home.css'

export default function Home() {
  return (
    <main className='homeMain'>
      <Header />
      <section className="container">
        <div className="textContent">
          <h2 className="upperText">SO, YOU WANT TO TRAVEL TO</h2>
          <h1 className="title">SPACE</h1>
          <p className="belowText">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <Link className="exploreButton" to="/destination">
          EXPLORE
        </Link>
      </section>
    </main>
  )
}
