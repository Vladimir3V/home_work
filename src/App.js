import React, { PureComponent } from "react";
import "./App.css";
import NewsPost from "./NewsPost"



class App extends PureComponent {
  state = {
    newsInput: "",
    news: []
  };

  handleChange = event => {
    const value = event.target.value;
    this.setState({ newsInput: value });
  };

  handleKeyDown = event => {
    if (event.keyCode === 13) {
      const {newsInput, news} = this.state;
      this.setState({ newsInput: "", news: [...news, {text:newsInput}] });
  }
};

  render() {
    const { newsInput, news } = this.state;
    return (
      <div>
        <div className="App">
          <input
            value={newsInput}
            onChange={this.handleChange}
            onKeyDown={this.handleKeyDown}
            className="input"
          />
        </div>
        <div>
          {news.map(
            (newsPost) =>
              newsPost ? (
                <NewsPost text={newsPost.text} key={newsPost}/>
              ) : (
                ""
              )
          )}
        </div>
      </div>
    );
  }
}


export default App;


