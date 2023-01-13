import { ListSubheader, styled ,List} from "@mui/material"
import {Box} from '@mui/material'
import { NavLink } from "../components/buttons/Link"

export const Nav={
   Bar:styled(Box)({
      position:"fixed",
      width:"100%",
      height:'50px',
      top:0
   }),
   IButton:styled('div')({
      size:"medium",
		edge:"start",
		color:"inherit",		
		mr: 2,
   }),
   LinkGroup:styled('div')({
      display:"flex",
      gap:"0.5rem",
   }),
   DrawerBox:styled(Box)({
      height:"calc(100vh)",
      role:"presentation",
      backgroundColor: "#0A1929",
		color: "#A5A07C",
   }),
   ListSubheader:styled(ListSubheader)({
      component:"div",
		id:"nested-list-subheader",
		fontSize: '1.2rem',
		// paddingTop: 5,	
      backgroundColor:"#0A1929"
   }),
   List:styled(List)({
      paddingLeft: 10,
   }),
   NavLink:styled(NavLink)({
      // color:"#a5a07c"
   })
}


