import React from 'react';
import logo from './logo.svg';
import './App.css';
import store from './store';
import {Provider} from 'react-redux';
import {Route} from 'react-router-dom';
import EventsListContainer from './components/EventsListContainer'
import EventDetailsContainer from './components/EventDetailsContainer'

class App extends React.Component {
  render(){
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
             <Route path='/' exact component={EventsListContainer} />
             <Route path='/event/:id' component={EventDetailsContainer} />
          </header>
        </div>
      </Provider>
    );
  }
}

export default App;
