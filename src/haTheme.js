import { createTheme } from '@mui/material/styles'
import { amber, indigo } from '@mui/material/colors'
import { defaultTheme } from 'react-admin';

export const mainTheme = createTheme({
  ...defaultTheme,
  palette: {
    ...defaultTheme.palette,
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
  components:{
    ...defaultTheme.components,
    RaDatagrid: {
      styleOverrides: {
        root: {
          "& .RaDatagrid-headerCell": {
            backgroundColor: "#1D5D9B",
            color:"white",
            "& :hover":{
              backgroundColor: "#1D5D9B",
            }
          },
          "& .RaDatagrid-tbody":{
            "& .RaDatagrid-row":{
              ":hover":{
              }
            },
          }
        }
     }
  }
  }
  //shadows: Array(25).fill('none')
})
