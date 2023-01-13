import * as React from 'react';
import {useState} from 'react';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { Nav } from '../../styled-components/NavStyled';
import {ListItemButton} from "@mui/material";
import categories from "../api/categories";
import logo from "./Logo.png";
import '../../components/navigation/Navbar.css'
import { NavLink } from '../buttons/Link';
export default function Drawer() {
	const [ drawer, setDrawer ] = useState( {left: false,} );

	const toggleDrawer = (anchor, open) => (event) => {
		if (
			event &&
			event.type === 'keydown' &&
			(event.key === 'Tab' || event.key === 'Shift')
		) {
			return;
		}

		setDrawer( {...drawer, [anchor]: open} );
	};


	const list = (anchor) => (
		<Nav.DrawerBox
			sx={{width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 200,}}
			onClick={toggleDrawer( anchor, false )}
			onKeyDown={toggleDrawer( anchor, false )}
		>
			<Nav.ListSubheader> <img src={logo} alt="NEWS"/> </Nav.ListSubheader>
			<Nav.List>				
					<ListItem >
					<NavLink className={({isActive})=>isActive?"link-active l-active":"link-active"} to="/">
						Top-Headlines
					</NavLink>
					</ListItem>
					<ListItem >
					<NavLink className={({isActive})=>isActive?"link-active l-active":"link-active"} to="/global">
						Global
					</NavLink>
					</ListItem>
					<ListItem >
					<NavLink className={({isActive})=>isActive?"link-active l-active":"link-active"} to="/search">
						Search
					</NavLink>
					<Divider/>
					</ListItem>				
			</Nav.List>
			<Divider/>
			<Nav.ListSubheader>
					CATEGORIES
			</Nav.ListSubheader>
			<Nav.List>
				{categories.map( (text) => (
					<ListItemButton style={{paddingLeft: 40, fontFamily: 'Gluten'}} key={text}>
						<NavLink className={({isActive})=>isActive?"link-active l-active":"link-active"} to={`/categories/${text}`}>
						 {text.toUpperCase()}
						</NavLink>
					</ListItemButton>
				) )}
			</Nav.List>
			<div style={{
				display: "grid",
				justifyContent: "center",
			}}>
			</div>

		</Nav.DrawerBox>
	);

	return (
		<div>
			<React.Fragment>
			<Nav.IButton onClick={toggleDrawer( 'left', true )}>
				<img src={logo} alt="NEWS"/>
			</Nav.IButton>
			<SwipeableDrawer
					anchor={'left'}
					open={drawer['left']}
					onClose={toggleDrawer( 'left', false )}
					onOpen={toggleDrawer( 'left', true )}
			>
					{list( 'left' )}
			</SwipeableDrawer>
			</React.Fragment>
		</div>
	);
}
