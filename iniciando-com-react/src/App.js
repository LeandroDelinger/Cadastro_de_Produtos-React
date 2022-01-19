import React from "react";
class App extends React.Component {
  state = {
    name: "",
  };

  changeName = (e) => {
    this.setState({
      name: e.target.value,
    });
  };

  criaComboBox = () => {
    const options = ["Fulano", "Cicrano", "Maria"];
    const comboBoxOptions = options.map((options) => (
      <option>{options}</option>
    ));

    return <select>{comboBoxOptions}</select>;
  };

  componentDidMount() {
    console.log("executou o componentDidMount");
  }

  render() {
    console.log("Executou o render");
    return (
      <React.Fragment>
        <input
          type="text"
          value={this.state.name}
          onChange={this.changeName}
        ></input>

        <h1>Hello {this.state.name}</h1>
        <h2>Sua idade é {this.props.idade} anos</h2>

        {this.criaComboBox()}
      </React.Fragment>
    );
  }
}

export default App;
