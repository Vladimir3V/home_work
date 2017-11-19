import React, { Component } from "react";
import "./Switcher.css";

// Для работы этой компоненты нужно использовать методы React.Children.toArray
// а так же работать с child.type.name и child.type.displayName

class Switcher extends Component {
  state = {
    selectedChild: 0
  };

  handleChangeChild = e => {
    const dataId = e.target.getAttribute("data-id") * 1;
    this.setState({
      selectedChild: dataId
    });
  };

  showChild = () => {
    return this.props.children.map((child, index) => {
      return index === this.state.selectedChild ? child : "";
    });
  };

  showComponentList = () => {
    // React.Children.toArray  // совсем не понятно зачем тут React.Children.toArray??? результат все равно равен this.props.children

    return this.props.children.map((child, index) => {
      return (
        <li
          key={index}
          className="component-list__name"
          data-id={index}
          onClick={this.handleChangeChild}
        >
          {child.type.displayName ? child.type.displayName : child.type.name}
        </li>
      );
    });
  };

  render() {
    return (
      <div>
        <ul className="component-list">{this.showComponentList()}</ul>
        {this.showChild()}
      </div>
    );
  }
}

export default Switcher;
