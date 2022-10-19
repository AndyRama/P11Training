import Banner from "../../components/Banner/Banner"
import Collapse from "components/Collapse/Collapse";

import ImageBanner from "./../../assets/images/BannerAbout.png"

function About() {
  const collapse = [
    {
      title:"fiabilité",
      text: "test"
    },

    {
      title:"fiabilité",
      text: "test"
    },

    {
      title:"fiabilité",
      text: "test"
    },

    {
      title:"fiabilité",
      text: "test"
    }
  ]

  return (
    <section>
      <Banner image={ImageBanner}  page="about" />
      <ul className="list-wrapper">
        {collapse.map((item, index) => (
          <Collapse  key={index} title={item.title} text={item.text} />
        ))}
      </ul> 
    </section>
  );
}

export default About;