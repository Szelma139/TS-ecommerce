import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from './SmallComponents/Button';

import { createGlobalStyle } from "styled-components";


const GlobalStyles = createGlobalStyle`
box-sizing: border-box;
`;


function App() {
  return (
    <div>
      <GlobalStyles/>
      asdasds
      {/* <Button variant="primary" /> */}
      {/* <Button variant="secondary" /> */}
      <Button/>
    </div>
  );
}

export default App;
