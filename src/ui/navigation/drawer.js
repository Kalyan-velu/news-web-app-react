import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

import {IconButton, ListSubheader} from "@mui/material";
import {MenuRounded} from "@mui/icons-material";
import categories, {cate} from "../../data/categories";


export default function Drawer() {
	const [ state, setState ] = React.useState( {
		left: false,
	} );


	const toggleDrawer = (anchor, open) => (event) => {
		if (
			event &&
			event.type === 'keydown' &&
			(event.key === 'Tab' || event.key === 'Shift')
		) {
			return;
		}

		setState( {...state, [anchor]: open} );
	};


	const list = (anchor) => (
		<Box
			sx={{width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250}}
			role="presentation"
			onClick={toggleDrawer( anchor, false )}
			onKeyDown={toggleDrawer( anchor, false )}
		>
			<List>
				{cate.map( (text) => (
					<ListItem button key={text}>
						<ListItemText primary={text}/>
					</ListItem>
				) )}
			</List>
			<Divider/>
			<List>
				<ListSubheader component="div" id="nested-list-subheader">
					CATEGORIES
				</ListSubheader>
				{categories.map( (text) => (
					<ListItem button key={text}>
						<ListItemText style={{textTransform: 'capitalize'}} primary={text}/>
					</ListItem>
				) )}
			</List>
		</Box>
	);

	return (
		<div>
			<React.Fragment>
				<IconButton
					padding
					size='medium'
					onClick={toggleDrawer( 'left', true )}
				>
					<MenuRounded/>
				</IconButton>
				<SwipeableDrawer
					anchor={'left'}
					open={state['left']}
					onClose={toggleDrawer( 'left', false )}
					onOpen={toggleDrawer( 'left', true )}
				>
					{list( 'left' )}
				</SwipeableDrawer>
			</React.Fragment>
		</div>
	);
}
