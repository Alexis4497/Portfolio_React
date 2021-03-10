import React from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import Contact from './pages/Contact';
import Home from './pages/Home';
import {Project1, Project2, Project3, Project4, Project5, Project6}  from './pages/Project';

const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home}/>
      
      <Route exact path="/projet-1" component={Project1}/>
      <Route exact path="/projet-2" component={Project2}/>
      <Route exact path="/projet-3" component={Project3}/>
      <Route exact path="/projet-4" component={Project4}/>
      <Route exact path="/projet-5" component={Project5}/>
      <Route exact path="/projet-6" component={Project6}/>
      
      <Route exact path="/contact" component={Contact}/>
      <Redirect to="/"/>


    
    



    </Switch>
  );
};

export default App;