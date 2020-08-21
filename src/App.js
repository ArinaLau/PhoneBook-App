import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header';
import ContactList from './components/ContactList';
import AddContact from './components/AddContact';
import { GlobalContextProvider } from './context/GlobalState';

function App() {

  return ( 
    <Router>
        <GlobalContextProvider>
          <div className="App container">
            <Header />
            <Route exact path='/' component={ContactList}/>
            <Route path="/add" component={AddContact}/>
          </div>
        </GlobalContextProvider>
    </Router>
    
  );
}

export default App;
