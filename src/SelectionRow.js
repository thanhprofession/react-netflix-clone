import React from 'react';
import { MDBRow, MDBCol, MDBIcon } from "mdbreact";
import Slider from "react-slick";
import Selection from "./Selection";

import data from "./data.json";

function NextArrow(props) {
    const { onClick } = props;
    return (
        <button
            className={"selection-next"} 
            type="button" 
            onClick={onClick}>
            <MDBIcon icon="angle-right" />
        </button>
    );
}

function PrevArrow(props) {
    const { onClick } = props;
    return (
        <button
            className={"selection-previous"} 
            type="button" 
            onClick={onClick}>
            <MDBIcon icon="angle-left" />
        </button>
    );
}

class SelectionRow extends React.Component {
  
  constructor(props) {
      super(props);

      this.state = {
        selections: data[this.props.dataKey]
      }

  }

  render() {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
    };
    const selections = this.state.selections.map((element, i) => (
        <Selection
            key={i}
            src={element.src} 
        />
    ));
    return (
      <div className="selection-row">
          <h2 className="category-title">{this.props.title}</h2>
          <MDBRow>
            <MDBCol size="12">
                <Slider {...settings}>
                    {selections}
                </Slider>
            </MDBCol>
          </MDBRow>
      </div>
    )
  }

}

export default SelectionRow;
