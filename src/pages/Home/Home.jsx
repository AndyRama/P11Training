import './Home.scss'
import Banner from "../../components/Banner/Banner"
import ImageBanner from "./../../assets/images/BannerHome.png"

function Home() {
  return (
    <section>
      <Banner image={ ImageBanner } text="Chez vous, partout et ailleurs"/>
    </section>
  );
}

export default Home;
