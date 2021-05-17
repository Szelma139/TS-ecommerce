import React from "react";
import "./App.css";

import { createGlobalStyle } from "styled-components";
import { Theme } from "./Theme/Theme";

import { LadningPage } from "./pages/LadningPage";


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
      <LadningPage/>
      </Theme>
    </div>
  );
}

export default App;
