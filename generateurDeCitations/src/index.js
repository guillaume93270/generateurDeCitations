import React from 'react';
import { render } from 'react-dom';
import citations from './citations';
import "./index.css";

class App extends React.Component {

state = {};
componentWillMount(){
  this.genererCitation();
}

genererCitation = event => {
  //je transforme les citation en array
  const KeyArray = Object.keys(citations);

  //citations aux hasard
    const randomkey = KeyArray[Math.floor(Math.random() * KeyArray.length)];
    if(this.state.citation === citations[randomkey].citation) {
      this.genererCitation();
      return;
    }
this.setState(citations[randomkey]);
};
﻿
  render(){
    return(
      <div>
    <p>
{this.state.citation}
      <span>-  {this.state.auteur}</span>
    </p>
    <button onClick={e => this.genererCitation(e)} >Une autre citation!</button>
</div>
    )
  }
}
render(
  <App />,
  document.getElementById('root')
);
