import React, {useState} from 'react';
import "./usrauth.css";
import {TextField} from "@mui/material";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";


export default function User() {
	const [ email, setEmail ] = useState( '' );
	const [ password, setPassword ] = useState( '' );

	function handleEmailChange(e) {
		setEmail( e.defaultValue )
	}

	function handlePasswordChange(e) {
		setPassword( e.target.value )
	}

	function handleSubmit(e) {
		e.preventDefault();
		console.log(email,password)
	}


	return (
		<div>

			<Box border-box component='form' className="login" onSubmit={handleSubmit} sx={{
				alignItems: "center",
				'& > :not(style)': {m: 2, width: '35ch'},
			}}>

				<h1 style={{textAlign: "center"}}>SIGN UP</h1>
				<Divider/>


				<TextField
					label="Username"
					className="user"
					variant='outlined'
					type='email'
					required
					size="small"
					onChange={handleEmailChange}
				/>

				<TextField
					label="Password"
					className="input"
					type='password'
					variant='outlined'
					required
					size="small"
					onChange={handlePasswordChange}
				/>
				<div style={{textAlign: "center"}}>
					<p>Already have an account ?Sign In </p>
					<Button type='submit' varient='contained'>Sign Up</Button>
				</div>

			</Box>
		</div>


	);
}

