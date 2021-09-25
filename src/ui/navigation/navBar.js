import * as React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Drawer from "./drawer";
import "./News.png";
import {Typography} from "@mui/material";
import {Link} from 'react-router-dom'

export default function NavAppBar() {

	return (
		<Box sx={{flexGrow: 1}}>
			<Toolbar>

				<Drawer style={{paddingRight: "30px"}}/>
				<Typography style={{flexGrow: 1,}}>News</Typography>
				<div style={{flexGrow: 1}}/>
				<Link to="/search">
					<Box>
						<Button varient='outlined'>SEARCH
						</Button></Box>

				</Link>
				<Link to="/login">
					<Button varient='text' color="inherit">
						LOG IN
					</Button>
				</Link>

			</Toolbar>

		</Box>
	);
}
