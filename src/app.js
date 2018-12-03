import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Contacts from './components/contacts/Contacts';
import Header from './components/layout/Header';
import About from './components/pages/About';
import notFound from './components/pages/notFound';
import AddContact from './components/contacts/Addcontact';
import EditContact from './components/contacts/Editcontact';
import Test from './components/test/Test';
import { Provider } from './context';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@babel/polyfill';
import './app.css';

class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
          <div className="title">
            <Header branding="Contact Manager" />
            <div className="container">
              <Switch>
                <Route exact path="/" component={Contacts} />
                <Route exact path="/contact/add" component={AddContact} />
                <Route exact path="/contact/edit/:id" component={EditContact} />
                <Route exact path="/about" component={About} />
                <Route exact path="/test" component={Test} />
                <Route component={notFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
