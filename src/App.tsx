import React from "react";
import "./App.css";

import { createGlobalStyle } from "styled-components";
import { Theme } from "./Theme/Theme";

import OurServices from "./sections/OurServices";


const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Mulish:wght@700&display=swap');
*{
  box-sizing: border-box;
  font-family: 'Mulish', sans-serif;
}
`;



function App() {
  return (
    <div>
      <Theme>
        <GlobalStyles />
        <OurServices/>
      </Theme>
    </div>
  );
}

export default App;
