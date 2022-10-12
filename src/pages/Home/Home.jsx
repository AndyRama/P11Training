import './Home.scss'
import Banner from "../../components/Banner/Banner"
import ImageBanner from "./../../assets/images/BannerHome.png"

import { Link } from 'react-router-dom'

var logements = require('data/logements.json')

function Home() {
  return (
    <section>
      <Banner image={ ImageBanner } text="Chez vous, partout et ailleurs"/>
      <div className="logements-wrapper">
        { logements.map((logement,index) => (
          <Link to={ `/logement/${logement.id}`} key={logement.id} className="logements-box">
            <img src={ logement.cover } alt={ logement.title }/>
            <div className="opacity-div">
              <p>{ logement.title }</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default Home;
