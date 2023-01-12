import * as React from 'react';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box'
import Drawer from "./Drawer";
import { NavLink as Link } from '../../components/buttons/Link';
import {Nav} from '../../styled-components/NavStyled';
import './Navbar.css'

export default function NavAppBar() {
	return (
		<Nav.Bar position="fixed">
				<Toolbar sx={{color: "#7F8693", height: "40px"}}>											
					<Drawer/>			
					{/* <Link to='/'>
						<img width="160" height="50" src={logo} alt="NEWS"/>
					</Link> */}
					<Box sx={{flexGrow: 1}}/>
					<Nav.LinkGroup>
					<Link className={({isActive})=>isActive?"navbar-link active":"navbar-link"} to="/">
						Top-Headlines
					</Link>
					<Link className={({isActive})=>isActive?"navbar-link active":"navbar-link"} to="/global">
						Global
					</Link>
					<Link className={({isActive})=>isActive?"navbar-link active":"navbar-link"} to="/search">
						Search
					</Link>
					</Nav.LinkGroup>
				</Toolbar>
		</Nav.Bar>
	);
}
