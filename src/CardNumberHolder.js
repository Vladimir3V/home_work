import React, { Component } from "react";
import CardNumberInput from "./CardNumberInput";

class CardNumberHolder extends Component {
  state = {
    cardNumber: ""
  };

  handleChange = number => {
    this.setState({
      cardNumber: number
    });
    console.log(this.state);
  };

  render() {
    const { cardNumber } = this.state;
    return (
      <div className="component-wrapper">
        <CardNumberInput cardNumber={cardNumber} onChange={this.handleChange} />
      </div>
    );
  }
}

export default CardNumberHolder;
