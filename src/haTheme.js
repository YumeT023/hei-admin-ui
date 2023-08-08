import { createTheme } from '@mui/material/styles';
import { amber, indigo } from '@mui/material/colors';

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
  //shadows: Array(25).fill('none')
  //Couleur HEI jaune : #FCAF3B , rgb(252,175,59)
  //Couleur HEI bleu : #001948 , rgb(0,25,72)
  //Couleur HEI noir : #14171C , rgb(20,23,28)
  //palette couleur gris : #ECF2F8 , rgb(236,242,248)
  
  
  

  components: {
    RaSimpleShowLayout: {
      styleOverrides: {
        root: {
          //border : "1px solid",
          "& .RaSimpleShowLayout-stack": {
            margin: "0 auto",
            padding : "10px", 
            fontFamily: 'Arial, sans-serif',
            marginLeft: "5vh",
            marginTop: "3vh",
            marginBottom: "3vh",
          },
          "& .RaSimpleShowLayout-row": {
            width: "12%",
            display: "inline-block",
          },
          "& .MuiStack-root.ra-field.ra-field-first-name, .MuiStack-root.ra-field.ra-field-last-name": {
            display: "inline-block",
            width: "48%",
            marginRight: "2%",
          },
          "& .MuiStack-root.ra-field.ra-field-birth-date, .MuiStack-root.ra-field.ra-field-address, .MuiStack-root.ra-field.ra-field-email, .MuiStack-root.ra-field.ra-field-entrance-date": {
            width: "12%",
            display: "inline-block",
          },
          "& .css-8l66u2-MuiStack-root-RaLabeled-root .RaLabeled-label": {
            fontFamily: "fantasy",
            fontSize: "inherit",
            color: "#001948", 
          },
          "& .MuiStack-root.ra-field.ra-field-ref.RaSimpleShowLayout-row.css-8166u2-Muistack-root-RaLabeled-root": {
            width: "25%",
            border: "1px solid #ECF2F8", 
          },
        },
      },
    },
    RaLayout : {
      styleOverrides: {
        root:{
          "& .RaLayout-content": {
            backgroundColor : "#ECF2F8",
          }
        }
      }
    },
    RaShow: {
      styleOverrides: {
        root: {
          "& .RaShow-card": {
            marginLeft: '5vh',
            marginRight: '5vh',
          }
        }
      }
    },
    MuiLink: {
      styleOverrides: {
        root:{
          color : 'black',
        }
      }
    }
  },
});
