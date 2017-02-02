import React from 'react';
import ReactDOM from 'react-dom';
import Page from './Page';
import Header from './components/static/Header';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <h1>Kanban Main Page</h1>
        <Page />
      </div>
    )
  }
};



export default App;