import React, { Component } from "react";
import './Slide.scss'
import ChevronIcon from "components/Icons/Chevron";

class Slide extends Component {
  state= { index: 0 }
  
  previousSlide() {

    const nextIndex = this.state.index - 1;

    if(nextIndex < 0) {
      this.setState({index: this.props.Photos.length - 1 });
    } else {
      this.setState({ index: nextIndex });
    }
  }

  nextSlide() {
    this.setState({ index: (this.state.index + 1) % this.props.Photos.length });
  }

  render() {

    const photos = this.props.Photos;

    return( 
      <div className="photo-box">
        <div className="left-icon" onClick={() => this.previousSlide() }>
          <ChevronIcon />
        </div>
        <div className="right-icon" onClick={() => this.nextSlide() }>
          <ChevronIcon />
        </div>
        <img src={photos[this.state.index]} alt="foto" />
      </div>
    )
  }
}

export default Slide;