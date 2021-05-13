import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from './SmallComponents/Button';

import { createGlobalStyle } from "styled-components";
import { Theme } from './Theme/Theme';

const GlobalStyles = createGlobalStyle`
box-sizing: border-box;
`;


function App() {
  return (
    <div>
      <Theme>

  
      <GlobalStyles/>
      asdasds
      {/* <Button variant="primary" /> */}
      {/* <Button variant="secondary" /> */}
        <Button variant="primary">
          Agata
        </Button>
        <Button variant="secondary">
          Agata
        </Button>
   
        </Theme>
    </div>
  );
}

export default App;
