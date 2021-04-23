import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
 
import About from './About';
import Error from './Error';
import Home from './Home';
import Cancer from './Cancer';
import Diabeties from './Diabeties';
import Heart from './Heart';
import Malaria from './Malaria';

 
class App extends Component {
  render() {
    return (      
       <BrowserRouter>
        <div>
  
            <Switch>
             <Route path="/" component={Home} exact/>
             <Route path="/about" component={About}/>
             <Route path="/Cancer" component={Cancer}/>
             <Route path="/Diabeties" component={Diabeties}/>
             <Route path="/Heart" component={Heart}/>
             <Route path="/Malaria" component={Malaria}/>

            <Route component={Error}/>
           </Switch>
        </div> 
      </BrowserRouter>
    );
  }
}
 
export default App;