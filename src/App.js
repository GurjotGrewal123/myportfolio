import { Route, Switch } from "react-router"
import { ThemeProvider } from "styled-components"
import { lightTheme } from "./components/Themes"

import GlobaStyle from "./globalStyles"
import Intro from "./components/Intro"
import About from "./components/About"
import Work from "./components/Work"
import Projects from "./components/Projects"


function App() {
  return <>
    <GlobaStyle />

    <ThemeProvider theme={lightTheme}>
      <Switch>
        <Route exact path="/" component={Intro} />
        <Route exact path="/about" component={About} />
        <Route exact path="/work" component={Work} />
        <Route exact path="/projects" component={Projects} />
      </Switch>
    </ThemeProvider>
  </>

}

export default App

