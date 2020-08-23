import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Header(){
	return(
		<header style={headerStyle}>
			<h1>React PhoneBook App</h1>
			<NavLink 
				style={linkStyle} 
				activeStyle={activeLink}
				exact
				to="/">
				Home</NavLink> | 
			<NavLink style={linkStyle} activeStyle={activeLink} to="/add"> Add Contact</NavLink>
		</header>

		)
}


const headerStyle = {
	backgroundColor: '#333',
	color: '#fff',
	textAlign: 'center',
	padding: '10px'
}


const linkStyle = {
	color: '#fff',
	textDecoration: 'none'
}

const activeLink = {
	fontWeight: "bold",
	color: "#aaa"
}




