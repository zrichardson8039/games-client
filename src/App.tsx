import React from "react"
import { ThemeProvider } from "@emotion/react"
import { RouteProps } from "react-router"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import theme from "./theme"
import { NAMES } from "./components/types"
import Game from "./components/Game"

const routes: RouteProps[] = [
  {
    path: `/${NAMES.TIC_TAC_TOE}`,
    element: <Game name={NAMES.TIC_TAC_TOE} />,
  },
]

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          {routes.map((route: RouteProps, i: number) => (
            <Route key={i} {...route} />
          ))}
        </Routes>
      </Router>
    </ThemeProvider>
  )
}

export default App
