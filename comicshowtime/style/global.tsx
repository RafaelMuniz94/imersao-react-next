import {
  createGlobalStyle,
  DefaultTheme,
  ThemeProvider,
} from "styled-components";
import Head from "next/head";
import db from "../db.json";

interface ThemeProps extends DefaultTheme {
  colors: {
    primary: string;
    secondary: string;
    mainBg: string;
    contrastText: string;
    wrong: string;
    success: string;
  };
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
    color: ${({ theme }: any) => theme.colors.contrastText};
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
      <Head>
        <title>Comic show quiz!</title>
        <meta property="og:image" content={db.bg} />
        <meta
          property="og:description"
          content="Teste seus conhecimentos sobre séries de comédia"
        />
        <meta property="og:title" content="Comic show Quiz!" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {children}
      </ThemeProvider>
    </>
  );
}
