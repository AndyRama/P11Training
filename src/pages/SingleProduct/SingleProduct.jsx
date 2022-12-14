import React from 'react'
import { useParams } from 'react-router-dom'

import './SingleProduct.scss'

import Collapse from 'components/Collapse/Collapse'
import Slide from 'components/Slide/Slide'
import Tags from 'components/Tags/Tags'
import Rating from 'components/Rating/Rating'
// import 404 from 'components/404/404'

function SingleProduct() {

  var logements = require('data/logements.json')
  const { logementId } = useParams()
  const logement = logements.find((logement) => logement.id === logementId)
  // if(!logement) {
  //   return(
  //     <PageNotFound />
  //   )
  // }

  const { title, location, rating, host, equipments, description, pictures } = logement

  // Equipements content
  const content = (
    <ul>
      { equipments.map((equipment, index) => (
        <li key={index} className="singleproduct__collapse">
          {equipment}
        </li>
      ))}
    </ul>
  )

  return (
    <section>
      <div className="singleproduct">
        <Slide Photos={pictures} />      
        <div className="singleproduct__content">
          <div className="group-elements-left">  
            <h1 className='title'>{title}</h1>
            <p className='location'>{location}</p>
            <div className="tags-list-wrapper">
              {logement.tags.map((tag, index) => (
                <Tags key={index} getTag={Tags} />            
              ))}
            </div>
          </div>

          <div className="group-elements-right"> 
            <div className="name-photo-wrapper">
              <div className="host-name">{host.name}</div>
              <img  className="host-photo" src={host.picture} alt={host.name} />
            </div>
            <Rating rating = {rating} />  
          </div>     
        </div>
      </div>

      <div className="singleproduct__collapse">
        <Collapse title="description" text={description} />
        <Collapse title="équipement" text={content} />
      </div>
    </section>
  )
}

export default SingleProduct
