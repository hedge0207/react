import React, { Component } from "react";
import ScrollBox from "./ScrollBox";
import LifecycleSample from "./LifecycleSample";
import ErrorBoundary from "./ErrorBoundary";
import EventPractice from "./EventPractice";
import EventPracticeSelf from "./EventPracticeSelf";

//state의 color 값을 랜덤 색상으로 설정.
//1677215는 hex로 표현하면 ffffff가 되므로 아래 코드는 000000부터 ffffff 까지의 값을 반환한다.
function getRendomColor() {
  return "#" + Math.floor(Math.random() * 1677215).toString(16);
}

class App extends Component {
  state = {
    color: "#000000",
  };

  handleClick = () => {
    this.setState({
      color: getRendomColor(),
    });
  };

  render() {
    return (
      <div>
        <ScrollBox ref={(ref) => (this.scrollBox = ref)} />
        <button onClick={() => this.scrollBox.scrollToBottom()}>
          맨 밑으로
        </button>
        <ErrorBoundary>
          <LifecycleSample color={this.state.color} />
        </ErrorBoundary>
        <button onClick={this.handleClick}>랜덤 색상</button>
        <EventPractice />
        <EventPracticeSelf bool />
      </div>
    );
  }
}

export default App;
