import React from 'react'
import './App.css';
import AttachedNavbar from './components/AttachedNavbar';
import ContentNavbar from './components/ContentNavbar'
import Containers from './components/Containers'

function App() {
  return (
    <body className="App">
      <AttachedNavbar/>
      <ContentNavbar/>
      <div className="container-wrapper">
        <div className="col1">
          <Containers/>
          <Containers/>
        </div>
        <div className="col2">
          <Containers/>
          <Containers/>
        </div>
        <div className="col3">
          <Containers/>
          <Containers/>
        </div>
      </div>
    </body>
  );
}

export default App;
