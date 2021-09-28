import * as React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Drawer from "./drawer";
import logo from './Logo.png'
import {Link} from 'react-router-dom'
import {IconButton} from "@mui/material";

export default function NavAppBar() {

	return (
		<Box>

			<div>

				<Toolbar sx={{color: "#7F8693", height: "40px"}}>
					<IconButton
						size="medium"
						edge="start"
						color="inherit"
						aria-label="menu"
						sx={{mr: 2}}
					>
						<Drawer/>
					</IconButton>


					<Box sx={{
						width: 160,
						height: 63,
						margin: 1
					}}>
						<img src={logo} alt="NEWS"/>
					</Box>
					<Box sx={{flexGrow: 1}}/>
					<Link to="/">
						<Button style={{color: "#A5A07C"}} varient='text'>Top-Headlines</Button>
					</Link>
					<Link to="/global">
						<Button style={{color: "#A5A07C"}} varient='text'>Global</Button>
					</Link>
					<Link to="/search">

						<Button style={{color: "#A5A07C"}} varient='outlined'>SEARCH
						</Button>
					</Link>
					<Link to="/login">
						<Button style={{color: "#A5A07C"}} varient='text' color="inherit">
							LOG IN
						</Button>
					</Link>


				</Toolbar>
			</div>
		</Box>
	);
}
