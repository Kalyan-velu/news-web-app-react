import * as React from 'react';
import {useState} from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

import {IconButton, ListItemButton, ListSubheader} from "@mui/material";
import {MenuRounded} from "@mui/icons-material";
import categories, {cate} from "../../components/api/categories";
import logo from "./Logo.png";


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
		<Box
			sx={{
				width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 200,
				backgroundColor: "#0A1929",
				color: "#A5A07C",
			}}
			role="presentation"
			onClick={toggleDrawer( anchor, false )}
			onKeyDown={toggleDrawer( anchor, false )}
		>
			<ListSubheader
				component="div"
				id="nested-list-subheader"
				style={{
					fontSize: 30,
					paddingTop: 5,
					paddingLeft: 45,
					backgroundColor: "#0A1929"
				}}
			><img src={logo} alt="NEWS"/></ListSubheader>
			<List style={{
				paddingLeft: 10,
			}}>
				{cate.map( (text) => (
					<ListItem button key={text}>
						<ListItemText style={{fontColor: '#1111'}} primary={text}/>
						<Divider/>
					</ListItem>
				) )}
			</List>
			<Divider/>
			<List>
				<ListSubheader component="div" id="nested-list-subheader" sx={{backgroundColor: "#0A1929"}}>
					CATEGORIES
				</ListSubheader>
				{categories.map( (text) => (
					<ListItemButton style={{paddingLeft: 40, fontFamily: 'Gluten'}} key={text}>
						<ListItemText style={{textTransform: 'capitalize'}} primary={text}/>
					</ListItemButton>
				) )}
			</List>
			<div style={{
				display: "grid",
				justifyContent: "center",
			}}>
			</div>

		</Box>
	);

	return (
		<div>
			<React.Fragment>
				<IconButton
					size='medium'
					onClick={toggleDrawer( 'left', true )}
				>
					<MenuRounded style={{fill: '#A5A07C'}}/>
				</IconButton>
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
