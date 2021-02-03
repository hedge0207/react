import React, { Component } from "react";

class HistorySample extends Component {
  // 뒤로 가기
  handleGoBack = () => {
    this.props.history.goBack();
  };

  // 홈 화면으로 이동
  handleGoHome = () => {
    this.props.history.push("/");
  };

  componentDidMount() {
    this.unblock = this.props.history.block("정말 떠나실 건가요?");
  }

  // 페이지에 변화가 생기려고 할 때마다 정말 나갈 것인지 묻는다.
  componentWillUnmount() {
    // componentDidMount에서 성공적으로 객체의 프로퍼티가 할당되었다면 실행
    if (this.unblock) {
      this.unblock();
    }
  }

  render() {
    return (
      <div>
        <button onClick={this.handleGoBack}>뒤로</button>
        <button onClick={this.handleGoHome}>홈으로</button>
      </div>
    );
  }
}

export default HistorySample;
