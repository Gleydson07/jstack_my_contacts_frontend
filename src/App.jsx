import { ThemeProvider } from "styled-components";
import defaultTheme from './assets/styles/themes/default';
import GlobalStyles from './assets/styles/global';
import { Layout } from "./components/Layout";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <Layout/>
    </ThemeProvider>
  )
}

export default App
