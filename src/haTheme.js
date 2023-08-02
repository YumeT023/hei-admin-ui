import { createTheme } from '@mui/material/styles'
import { amber, indigo } from '@mui/material/colors'

export const mainTheme = createTheme({
  palette: {
    primary: {
      main: indigo[800]
    },
    secondary: {
      main: amber[500]
    }
  },
  typography: {
    fontFamily: ['Quicksand', 'sans-serif'].join(','),
    fontSize: 15
  },
  sidebar: {
    width: 200, 
    closedWidth: 1, 
},
  components: {
    Layout:{
          styleOverrides: {
            root: {
              margin_top: '0',
            },
          },
       
    }
  }
  //shadows: Array(25).fill('none')
})
