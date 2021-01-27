import { createGlobalStyle, DefaultTheme, ThemeProvider } from "styled-components";
import db from "../db.json";

interface ThemeProps extends DefaultTheme{
    colors: {
        primary:string,
        secondary: string,
        mainBg: string,
        contrastText: string,
        wrong: string,
        success: string
      }
}

const theme: ThemeProps = db.theme;

let GlobalStyle = createGlobalStyle`

*{
    box-sizing:border-box
}

body{
    margin:0;
    padding:0;
    display:flex;
    flex-direction:column;
    font-family: "Lato", sans-serif;
    color: ${({ theme }:any) => theme.colors.contrastText};
}

html,body{
    min-height:100vh;
}

#__next{
    flex:1;
    display: flex;
    flex-direction: column;
}

`;


export default function Global({ children }: any) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {children}
      </ThemeProvider>
    </>
  );
}
