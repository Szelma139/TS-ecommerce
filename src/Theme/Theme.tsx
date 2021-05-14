import { ThemeProvider, DefaultTheme } from "styled-components";

interface Ivariant {
  [variant: string]: string;
}



export const theme = {
    colors: {
      blue: "#458FF6",
    lightblue: "#4089ED",
      gray: "#7D7987",
      black: "#000000",
      white: "#FFFFFF",
      
      
    },
    gradient: {
      blueGradient: "linear-gradient(208.18deg, #67C3F3 9.05%, #5A98F2 76.74%)"
    }
  }

type ThemeProps = {
    children: React.ReactNode | null;
  }

export const Theme = ({ children }: ThemeProps) => (
    <ThemeProvider theme={theme}>
        {children}
    </ThemeProvider>)
