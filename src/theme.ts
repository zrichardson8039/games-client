import { grey, blue } from "@mui/material/colors"
import { createTheme, Palette } from "@mui/material"

declare module "@mui/material/styles" {
  interface Theme {
    palette: Palette
    status: {
      danger: string
    }
  }
}

const theme = createTheme({
  palette: {
    primary: {
      main: grey[900],
      light: grey[500],
      dark: "#000000",
      contrastText: "#ffffff",
    },
    secondary: {
      main: blue[500],
      light: blue[300],
      dark: blue[700],
      contrastText: grey[900],
    },
  },
})

export default theme
