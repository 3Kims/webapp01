class App extends React.Component {
  state = {
    name: "주혁",
    age: 30,
    comments: [],
  };

  changeName = (e) => {
    let reqName = document.getElementById("userChangeInfo").value;
    if (reqName == "") window.alert("EmptyValueError");
    else {
      this.setState({
        name: reqName,
      });
    }
  };

  addComment = (e) => {
    console.log(this.state.name + " adding comment");
    console.log(document.getElementById("comment").value);
    console.log(e.target);
  };
  handleMouseOver(e) {
    console.log("다시한번 생각해보세요... 사실 지우기 기능이란건 없습니다.");
    console.log(e.target);
  }
  handleCopy(e) {
    this.state;
    console.log("try being original for once!");
  }
  render() {
    return (
      <div className="app-content">
        <div>
          <h1 id="Greet-warn">
            안녕하세요! {this.state.name} ({this.state.age})
          </h1>
          <input type="text" id="comment"></input>
          <button onClick={this.addComment}>Comment</button>
          <button onMouseOver={this.handleMouseOver}>Delete</button>
        </div>
        <div>
          <input
            type="text"
            id="userChangeInfo"
            placeholder="Enter Your Name
          "
          ></input>
          <button onClick={this.changeName}>이름바꾸기</button>
        </div>
        <div></div>
      </div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById("app01"));
