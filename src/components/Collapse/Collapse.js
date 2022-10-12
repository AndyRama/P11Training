import React from "react";
import ChevronIcon from "components/Icons/Chevron";

import "./Collapse.scss"

function Collapse(props){
  return(
    <li >
      <div className="list-item">
        <p>{ props.title }</p>
        <div className="icon-wrapper">
          < ChevronIcon/>
        </div>
      </div>
    </li>
  )
}

export default Collapse;