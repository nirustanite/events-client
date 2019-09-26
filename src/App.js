import React from 'react';
import logo from './logo.svg';
import './App.css';
import store from './store';
import {Provider} from 'react-redux';
import {Route} from 'react-router-dom';
import EventsListContainer from './components/EventsListContainer'
import CreateEventFormContainer from './components/CreateEventFormContainer'

class App extends React.Component {
  render(){
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
             <Route path='/' exact component={EventsListContainer} />
          </header>
        </div>
      </Provider>
    );
  }
}

export default App;
