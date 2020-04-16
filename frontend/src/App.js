import React from 'react';
import './style.css';
import Topnav from './container/Topnav';
import Aside from './container/Aside';
import Content from './container/Content';


function App() {
  return (
    <React.Fragment>
      <Topnav />
      <Aside />
      <Content />
    </React.Fragment>  
  );
}

export default App;
