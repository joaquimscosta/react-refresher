import React, { Component } from "react";
import UserCreate from "./UserCreate";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      language: 'english'
    };
  }
  onLanguageChange=(language)=>{
      console.log('buttonclicked')
      this.setState(()=>({
          language
      }))
  }
  render() {
    return (
      <div className="ui container">
        <div>
          Select a language:
          <i
            className="flag us"
            onClick={() => this.onLanguageChange("english")}
          />
          <i
            className="flag nl"
            onClick={() => this.onLanguageChange("ditch")}
          />
          <UserCreate/>
        </div>
      </div>
    );
  }
}
export default App;
