import React, { Component }from "react";
import axios from "axios";
let apiKey = "dfacccedf3a35b1589c0ce509793bcae";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: `https://api.openweathermap.org/data/2.5/weather?q=Baku&units=metric&APPID=${apiKey}`,
      value: "",
      temp: ""
    };
 
  }
getData = () =>{
  axios
  .get(this.state.url)
  .then(res => {
    this.setState({
      temp: res.data.main.temp
    });
    console.log(this.state.temp);
  });

}
  componentDidMount() {
    this.getData();
  }
  

  handleChange = event => {
    this.setState({
      value: event.target.value
    });

  };
  handleSubmit = event => {
    this.setState({
    value: this.state.value
    })
    console.log(this.state.value)
    event.preventDefault();
  };

  render() {
    return (
        <div className="container">
   <div className="card">
   <h1>The weather in Baku is</h1>
        <h2 className="number">{this.state.temp}</h2>

      </div>
<div className="sun">
        <div className="icon-sun" style={{float: "left"}}>
    <div className="sun-burst" style={{backgroundColor: "#FFCC33"}}></div>
    <div className="sun-core-outer"></div>
    <div className="sun-core-inner" style={{backgroundColor: "#FFCC33"}}></div>
  </div>
       </div>
        </div>
    );
  }
}

export default App;
