import { ThemeProvider } from "styled-components"
import { lightTheme } from "./components/Themes"

import GlobalStyle from "./globalStyles"
import Intro from "./components/Intro"
import About from "./components/About"
import Work from "./components/Work"
import Projects from "./components/Projects"
import Footer from "./components/Footer"


function App() {
  return <>
    <GlobalStyle />

    <ThemeProvider theme={lightTheme}>
      <Intro />
      <About />
      <Work />
      <Projects />
      <Footer></Footer>
    </ThemeProvider>
  </>

}

export default App

