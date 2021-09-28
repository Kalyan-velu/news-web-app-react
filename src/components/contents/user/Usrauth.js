import React, {useState} from 'react';
import "./usrauth.css";
import {TextField} from "@mui/material";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Axios from 'axios'


export default function User() {
	const [ username, setUsername ] = useState( '' );
	const [ password, setPassword ] = useState( '' );
	const [ hasAccount, setHasAccount ] = useState( false );

	function handleEmailChange(e) {
		setUsername( e.target.value );
	}

	function handlePasswordChange(e) {
		setPassword( e.target.value );
	}

	/*post username and password to backend*/
	const register = () => {
		Axios.post( `http://localhost:3001/register`, {
				username: username,
				password: password,
			} )
			.then( (response) => {
				console.log( response );
			} )
			//error handling
			.then( (error) => {
				console.log( error );
			} );
		console.log( username );
		return (
			<p>Registered</p>
		)
	};

	const login = () => {
		Axios.post( `http://localhost:3001/login`, {
				username: username,
				password: password,
			} )
			.then( (response) => {
				console.log( response );
				return (
					<h1>Log in</h1>
				)
			} )
			.then( (error) => {
				console.log( error );
			} );
		window.alert( "Login" )
		;
	};
	return (
		<div>
			<Box border-box component='form' className="login" sx={{
				alignItems: "center",
				'& > :not(style)': {m: 2, width: '35ch'},
			}}>
				{hasAccount ? (
					<>
						<h1 style={{textAlign: "center"}}>LOG IN</h1>
					</>
				) : (
					<>
						<h1 style={{textAlign: "center"}}>SIGN UP</h1>
					</>
				)
				}
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
					{hasAccount ? (
						<>
							<button type="submit" onClick={login}>Log In</button>
							<p>Create an account !</p><a onClick={() => setHasAccount( !hasAccount )}>Sign Up</a>
						</>
					) : (
						<>
							<button type="submit" onClick={register}>Sign Up</button>
							<p> Already have an account ! <a onClick={() => setHasAccount( !hasAccount )}>Log In</a></p>
						</>)}
				</div>

			</Box>
		</div>


	);
}

