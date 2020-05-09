class App extends React.Component {
  state = {
    name: "주혁",
    age: 30,
    comments: [],
  };

  handleNameChange = (e) => {
    this.setState({
      name: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log("form submitted", this.state.name);
  };

  render() {
    return (
      <div className="app-content">
        <div>
          <p>React (REDUX) 앱은 다른 디렉토리에서 생성중입니다....</p>

          <h1>My Name is {this.state.name}</h1>
          <form onSubmit={this.handleSubmit}>
            <input type="text" onChange={this.handleNameChange} />
            <button>Submit</button>
          </form>
        </div>
      </div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById("app02"));
