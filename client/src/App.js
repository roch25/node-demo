import React from 'react';
import AnimalList from './AnimalList';
import './App.css';
import Header from './Header';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      apiRes : [],
      ready: false
    };
  }

  display =  (identifier) => { 
    fetch("http://localhost:3001/animals/" + identifier)
    .then(res => res.json())
    .then(res => {this.setState({apiRes: res, ready : true})})
  }

  // callApi() {
  //   fetch("http://localhost:3001/animals/doggos")
  //   .then(res => res.json())
  //   .then(res => {this.setState( {apiRes: res})})
  // }

  // componentDidMount(){
  //   this.callApi();
  // }

  render(){   
    return (
      <div className="App">
        <header>
          <Header display = {this.display}/>
        </header>
        <div>
          {
            this.state.ready &&
            <AnimalList list = {this.state.apiRes}/>
          }
        </div>
      </div>
    );
  }
}

export default App;
