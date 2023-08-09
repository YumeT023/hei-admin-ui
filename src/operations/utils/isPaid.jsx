import {PriceCheck, ReportProblem, WarningAmber} from "@mui/icons-material"
export const isPaid = (input) =>{
  switch(input){
    case "LATE":return <WarningAmber color='warning'/>;
    case "UNPAID":return <ReportProblem color='error'/>;
    case "PAID":return <PriceCheck  color='success'/>;
  }
}