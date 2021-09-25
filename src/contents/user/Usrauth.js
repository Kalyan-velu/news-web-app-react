import React, {useState} from 'react';
import "./usrauth.css";
import {TextField} from "@mui/material";


import Button from "@mui/material/Button";



export default function User(){
	const [ email, setEmail] = useState( " " );
	const [ password, setPassword ] = useState( " " );


	function  handleEmailChange(e){
		setEmail(e.defaultValue)
	}
	function  handlePasswordChange(e){
		setPassword(e.target.value)

	}

	function handleSubmit(e) {
		e.preventDefault();
		console.log(email,password)
	}

	return (
		<div>

				<h1 style={
					{
						textAlign:"center"
					}
				}>Sign Up</h1>
			<form className='root' onSubmit={handleSubmit}>

				<TextField
					className="input-user"
					label="Email"
					variant='filled'
					type='email'
					required
					value={email}
					onChange={handleEmailChange}
				/>

				<TextField
					className="input"
					label="Password"
					type='password'
					variant='filled'
					required
					onChange={handlePasswordChange}
				/>
				<div>
                    <Button type='reset' varient='contained'>Reset</Button>
                    <Button type='submit' varient='contained'>Submit</Button>
				</div>
			</form>
		</div>


	);
}

