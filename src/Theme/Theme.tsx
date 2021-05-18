import { ThemeProvider } from "styled-components";


export const theme = {
    colors: {
      blue: "#458FF6",
      lightblue: "#4089ED",
      gray: "#7D7987",
      black: "#000000",
      white: "#FFFFFF",   
      transparent: "transparent",
    },
    gradient: {
      blueGradient: "linear-gradient(208.18deg, #67C3F3 9.05%, #5A98F2 76.74%)"
    },
    borderRadius: {
      border5px: "5px",
      border10px: "10px",
      border55px: "55px",
    },
    fontSize: {
      smaller: "21px",
      small: "24px",
      medium: "36px",
      big: "48px"
    }
  }

type ThemeProps = {
    children: React.ReactNode | null;
  }

export const Theme = ({ children }: ThemeProps) => (
    <ThemeProvider theme={theme}>
        {children}
    </ThemeProvider>)
