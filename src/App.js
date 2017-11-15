import React, { Component } from "react";
import "./App.css";
import "./App.scss";
import Step from "./Step";
import CardForm from "./CardForm";
import PersonalForm from "./PersonalForm";

const stepTitles = ["Personal information", "Card information", "Finish"];

const trueFalseArrs = [
  [[true, false], [false, false], [false, false]],
  [[false, true], [true, false], [false, false]],
  [[false, true], [false, true], [true, false]]
];

class App extends Component {
  state = {
    step: 1,
    firstName: "",
    lastName: "",
    email: "",
    cardNumber: "",
    isTimeOver: false
  };

  handleTabClick = step => {
    this.setState({ step: step });
  };

  handleChangeForm = (key, val) => {
    var newState = this.state;
    newState[key] = val;
    this.setState(newState);
  };

  handleClickNextForm = () => {
    this.setState(
      state => (state.step <= 3 ? { step: state.step + 1 } : { step: 3 })
    );
  };

  handleChangeTimeOver = isTimeOver => {
    this.setState({ isTimeOver });
  };

  isFormCommitable = () => {
    const { step, firstName, lastName, email, cardNumber } = this.state;
    switch (step) {
      case 1:
        return (
          firstName !== "" &&
          lastName !== "" &&
          email !== "" &&
          email.indexOf("@") !== -1
        );
      case 2:
        return cardNumber.length === 16;
      default:
        return false;
    }
  };

  renderForm = () => {
    const { step, firstName, lastName, email, cardNumber } = this.state;
    switch (step) {
      case 1:
        return (
          <PersonalForm
            firstName={firstName}
            lastName={lastName}
            email={email}
            onChangeForm={this.handleChangeForm}
          />
        );
      case 2:
        return (
          <CardForm
            cardNumber={cardNumber}
            onChangeForm={this.handleChangeForm}
            onChangeTimeOver={this.handleChangeTimeOver}
          />
        );
      default:
        return "Поздравляем!";
    }
  };

  render() {
    const { step, isTimeOver } = this.state;
    const trueFalseArr = trueFalseArrs[step - 1] || trueFalseArrs[0];
    const buttonCondition = !this.isFormCommitable() || isTimeOver;
    return (
      <div className="container">
        <div className="tab-panel">
          {stepTitles.map((stepTitle, index) => (
            <Step
              key={stepTitle}
              onClick={this.handleTabClick}
              isSelected={trueFalseArr[index][0]}
              number={index + 1}
              isClickable={trueFalseArr[index][1]}
            >
              {stepTitle}
            </Step>
          ))}
        </div>
        <div className="form-content"> {this.renderForm()} </div>
        {
          <div className="button-panel">
            <button
              className="button-next"
              disabled={buttonCondition}
              onClick={this.handleClickNextForm}
            >
              Next
            </button>
          </div>
        }
      </div>
    );
  }
}

export default App;
