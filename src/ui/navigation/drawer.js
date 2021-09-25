import * as React from 'react';
import {useState} from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

import {IconButton, ListItemButton, ListSubheader, Toolbar} from "@mui/material";
import {Facebook, GitHub, Instagram, LinkedIn, MenuRounded} from "@mui/icons-material";
import categories, {cate} from "../../data/categories";


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
			sx={{width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 200}}
			role="presentation"
			onClick={toggleDrawer( anchor, false )}
			onKeyDown={toggleDrawer( anchor, false )}
		>
			<ListSubheader component="div" id="nested-list-subheader"
			               style={{fontSize: 30, paddingTop: 20, paddingLeft: 80}}>NEWS</ListSubheader>
			<List style={{
				paddingLeft: 10,
			}}>
				{cate.map( (text) => (
					<ListItem button key={text}>
						<ListItemText style={{fontColor: '#1111'}} primary={text}/>
					</ListItem>
				) )}
			</List>
			<Divider/>
			<List>
				<ListSubheader component="div" id="nested-list-subheader">
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
				<Toolbar>

					<IconButton>
						<Instagram/>
					</IconButton>

					<IconButton>
						<Facebook/>
					</IconButton>
					<IconButton>

						<LinkedIn/>
					</IconButton>
					<IconButton>
						<GitHub/>
					</IconButton>
				</Toolbar>
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
					<MenuRounded/>
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
