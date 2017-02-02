import React from 'react';
import ReactDOM from 'react-dom';
import Page from './Page';
import Header from './static/Header';
//
class App extends React.Component {
    constructor () {
    super();

    // React only updates if there is a change in state
    this.state = {
      data: []
    }

    this.onServerData =  this.onServerData.bind(this);
    this.onServerError =  this.onServerError.bind(this);

  }

  onServerData(data) {
    const parsedServerData = JSON.parse(data.currentTarget.response);
    this.setState({data: parsedServerData});

  }

  onServerError(error) {
    console.log(error);

  }

  loadDataFromServer() {
    const oReq = new XMLHttpRequest();
    oReq.addEventListener("load", this.onServerData);
    oReq.addEventListener("error", this.onServerError);
    oReq.open("GET", "/api/cards");
    oReq.send();
  }

  componentWillMount() {
    this.loadDataFromServer();
  }

  render() {
    const {data} = this.state;
    return (
      <div className="App">
        <Header />
        <h1>Main Page</h1>
        <Page serverData={data} />
      </div>
    )
  }
};



export default App;