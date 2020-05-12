import React from 'react';
import AnimalList from './AnimalList';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {apiRes : []};
  }

  callApi() {
    fetch("http://localhost:3001/animals/doggos")
    .then(res => res.json())
    .then(res => {this.setState( {apiRes: res})})
  }

  componentDidMount(){
    this.callApi();
  }
  render(){    
    return (
      <div className="App">
        <body>
          <AnimalList list = {this.state.apiRes}/>
        </body>
      </div>
    );
  }
}

export default App;
