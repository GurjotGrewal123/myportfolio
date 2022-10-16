import { ThemeProvider } from "styled-components"
import { lightTheme } from "./components/Themes"

import GlobalStyle from "./globalStyles"
import Intro from "./components/Intro"
import About from "./components/About"
import Work from "./components/Work"
import Projects from "./components/Projects"
import Credits from "./components/Credits"


function App() {
  return <>
    <GlobalStyle />

    <ThemeProvider theme={lightTheme}>
      <Intro />
      <About />
      <Work />
      <Projects />
      <Credits />
    </ThemeProvider>
  </>

}

export default App

