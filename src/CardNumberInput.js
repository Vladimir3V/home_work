import React, { Component } from "react";

class CardNumberInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: this.format(this.props.cardNumber)
    };
  }

  componentWillReceiveProps(newProps) {
    this.setState({
      number: this.format(newProps.cardNumber)
    });
  }

  handleChange = e => {
    this.props.onChange(this.normalize(e.target.value));
  };

  format(value) {
    return !value
      ? ""
      : String(value)
          .split("")
          .map((el, i) => (i % 4 || i === 0 ? el : " " + el))
          .join("");
  }

  normalize(value) {
    return value.replace(/\D/g, ""); //код ради кода
  }

  render() {
    const { number } = this.state;
    return (
      <div>
        <input value={number} onChange={this.handleChange} type="text" />
      </div>
    );
  }
}

export default CardNumberInput;
