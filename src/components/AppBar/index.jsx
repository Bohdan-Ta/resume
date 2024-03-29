import React from 'react'
import { NavLink } from 'react-router-dom'

import styled from 'styled-components'
import Weather from '../Weather'

const Header = styled.div`
	width: 100%;
	position: fixed;
	top: 0;
	left: 0;
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 10;
	background-color: #1a1a1a;

	a {
		color: #fff;
		text-decoration: none;
		text-transform: capitalize;
		padding: 10px;
		margin: 0 5px;
		line-height: 60px;
		transition: 0.6s;
		font-style: 20px;
		cursor: pointer;

		&::after {
			content: '';
			display: block;
			position: relative;
			width: 0%;
			margin: 0 auto;
			border-bottom: 3px solid white;
			bottom: 0.15em;
			transition: all 0.5s;
		}
		&:hover::after {
			width: 100%;
		}

		@media (min-width: 768px) {
			padding: 10px 30px;
			margin: 0 20px;
		}
	}
`

export default function AppBar() {
	const width = window.innerWidth
	return (
		<Header>
			{width > 768 ? <Weather /> : null}
			<NavLink
				to='/'
				style={({ isActive }) => ({
					opacity: isActive ? '1' : '0.5',
				})}
			>
				Home
			</NavLink>
			<NavLink
				to='/project'
				style={({ isActive }) => ({
					opacity: isActive ? '1' : '0.5',
				})}
			>
				Project
			</NavLink>
			<NavLink
				to='/about'
				style={({ isActive }) => ({
					opacity: isActive ? '1' : '0.5',
				})}
			>
				About
			</NavLink>
			<NavLink
				to='/contact'
				style={({ isActive }) => ({
					opacity: isActive ? '1' : '0.5',
				})}
			>
				Contact
			</NavLink>
		</Header>
	)
}
