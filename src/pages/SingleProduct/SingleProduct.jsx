import React from 'react'
import { useParams } from 'react-router-dom'

import './SingleProduct.scss'

import Collapse from 'components/Collapse/Collapse'

function SingleProduct() {

  var logements = require('data/logements.json')
  const { logementId } = useParams()
  const logement = logements.find((logement)=> logement.id === logementId)
  if(!logement) {
    return(
      console.log("test")
    )
  }

  const { title, location, rating, host, equipment,pictures } =  logement

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
      
    </section>
  )
}

export default SingleProduct