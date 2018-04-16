import React from 'react';
import ReactDOM from 'react-dom';
import MyComp from './MyComp';
const App = () => {
  return (
    <div>
      <p>Simple Sails-React starter</p>
      <MyComp />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
