import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import Immutable from 'immutable';
import { setItems } from '../actions/cardsActions';
import ColumnsContainer from './ColumnsContainer';
import Header from './static/Header';
//
class App extends React.Component {
    constructor () {
    super();

    this.onServerData =  this.onServerData.bind(this);
    this.onServerError =  this.onServerError.bind(this);

  }

  onServerData(data) {
    const { dispatch } = this.props;
    const parsedServerData = JSON.parse(data.currentTarget.response);
    dispatch(setItems(parsedServerData));

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
    const {data} = this.props;
    return (
      <div className="App">
        <Header />
        <ColumnsContainer serverData={data} />
      </div>
    )
  }
};

const mapStateToProps = (state, ownProps) => {
  return {
    data: state.cardsReducer.toJS(),
  }
}



export default connect(
  mapStateToProps
)(App);