import React, { useState } from "react";
import ChevronIcon from "components/Icons/Chevron";

import "./Collapse.scss"

function Collapse(props){

  const [open, setOpen] = useState(false);
  const toggle = () => {
    setOpen(!open);
  }
  
  return(
    <li >
      <div className="list-item" onClick={toggle}>
        <p>{ props.title }</p>
        <div className={open ? 'reverse icon-wrapper': 'icon-wrapper'} >
          < ChevronIcon/>
        </div>
      </div>
      {open &&( 
        <div className="Collapsed-text">
          <p>{props.text}</p>
        </div>
      )}
    </li>
  )
}

export default Collapse;