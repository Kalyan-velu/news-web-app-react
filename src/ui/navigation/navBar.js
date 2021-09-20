import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import {ExitToApp} from "@mui/icons-material";
import Drawer from "./drawer";
import "./News.png";

export default function NavAppBar() {

	return (
		<Box sx={{flexGrow: 1}}>
			<AppBar position="static" style={{padding: 10}}>
				<Toolbar>
					<Drawer style={{paddingRight: "30px"}}/>
					<img src="News.png" style={{
						width: 50,
						height: 50,
						maxWidth: 60,
						margin: 6,
						flexGrow: 1,
					}} alt='news'/>
					<div style={{flexGrow: 1}}/>
					<Button color="inherit">
						LogOut
						<ExitToApp/>
					</Button>
				</Toolbar>
			</AppBar>
		</Box>
	);
}
