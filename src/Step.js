import React, { PureComponent } from "react";
import "./Step.css";
import "./Step.scss";

class Step extends PureComponent {
  handleClick = () => {
    const { isClickable, onClick, number } = this.props;
    isClickable && onClick(number);
  };

  render() {
    const { number, children, isSelected, isClickable } = this.props;
    return (
      <div
        className={
          "step" +
          (isSelected ? " step-selected" : "") +
          (isClickable ? " step-clickable" : "")
        }
        onClick={this.handleClick}
      >
        <p className="step__number">{number}</p>
        <p className="step__title">{children}</p>
      </div>
    );
  }
}

export default Step;
