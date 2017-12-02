import React, { Component } from "react";
import { connect } from "react-redux";
import "./Budget.css";

class Budget extends Component {
  render() {
    const {
      profit,
      marketExpanse,
      farmExpanse,
      deliveryExpanse
    } = this.props.budget;

    return (
      <div className="budget">
        <h2>Бюджет</h2>
        <p>Всего получено денег: {profit}</p>
        <p>Расходы продавцов: {marketExpanse}</p>
        <p>Расходы на ферме: {farmExpanse}</p>
        <p>Расходы на доставку: {deliveryExpanse}</p>
        <p>Итого: {profit + marketExpanse + farmExpanse}</p>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    budget: state.budget
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Budget);
