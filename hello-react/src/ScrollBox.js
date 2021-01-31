import React, { Component } from "react";

class ScrollBox extends Component {
  scrollToBottom = () => {
    // 디스트럭처링을 사용
    // scrollHeight,clientHeight 등은DOM 노드가 가진 값들이다.
    const { scrollHeight, clientHeight } = this.box;
    this.box.scrollTop = scrollHeight - clientHeight;
  };

  render() {
    const style = {
      border: "1px solid black",
      height: "300px",
      width: "300px",
      overflow: "auto",
      position: "relative",
    };
    const innerStyle = {
      width: "100%",
      height: "650px",
      background: "linear-gradient(white, black)",
    };
    return (
      <div
        style={style}
        ref={(ref) => {
          this.box = ref;
        }}
      >
        <div style={innerStyle} />
      </div>
    );
  }
}
export default ScrollBox;
