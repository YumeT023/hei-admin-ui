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
    },
  },
  typography: {
    fontFamily: ['Quicksand', 'sans-serif'].join(','),
    fontSize: 15
  },
  components: {
    RaDatagrid: {
      styleOverrides: {
        root: {
          "& .RaDatagrid-headerCell": {
            backgroundColor: "rgb(248, 191, 79,0.100)",
            color: '#F8BF4F',
            "& :hover": {
              color: "#c7c6c5"
            }
          },
          '& .RaDatagrid-thead': {
            borderBottom: "2px solid rgb(242, 141, 39)"
          },
          "& .RaDatagrid-tbody": {
            "& .RaDatagrid-row": {
              ":hover": {
                transitionDuration: 2,
                backgroundColor: "rgb(44, 57, 58,0.100)",
                color: "rgb(44, 57, 58)",
              }
            },
          }
        }
      }
    },
    RaList: {
      styleOverrides: {
        root: {
          '& .RaList-content': {
            borderRadius: "20px",
            overflow: "hidden",
            boxShadow: "-2px 2px 1px 1px rgb(22, 24, 41,0.250)"
          }
        }
      }
    },
    RaSidebar: {
      styleOverrides: {
        root: {
          '& .RaSidebar-fixed': {
            height: '100vh'
          }
        }
      }
    },
    RaLayout: {
      styleOverrides: {
        root: {
          '& .RaLayout-appFrame': {
            marginTop: 0,
            backgroundColor: "#ebebeb !important"
          },
          '& .RaLayout-content': {
            backgroundColor: "#ebebeb !important",
            marginTop: 0
          },
          '& .RaLayout-content': {
            gap: 5
          }
        }
      }
    },
    RaCreate: {
      styleOverrides: {
        root:{
           '& .RaCreate-card':{
            height:'100vh',
            boxShadow:'none',
            border:'1px solid #f7f7f7'
           }
        }
      }
    },
  }
})
