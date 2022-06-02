import React from 'react'
import styled from 'styled-components'
import my_photo from '../../images/photo_my.png'

const SizeBlock = styled.div`
	max-width: 1400px;
	min-height: 100vh;
	padding: 0 150px;
	display: flex;
	align-items: center;
	position: relative;
	top: 0;
	opacity: 1;
	transition: 1s;
	&:active {
		position: relative;
		opacity: 1;
		z-index: 8;
	}

	h1 {
		color: #fff;
		font-size: 120px;
		text-transform: capitalize;
		font-weight: 300;
	}
	img {
		position: absolute;
		top: 0;
		right: 0;
		height: 100vh;
		width: 50%;
		object-fit: cover;
		opacity: 0.2;
	}
`

export const Home = () => {
	return (
		<SizeBlock>
			<div>
				<h1>
					hello, i am <br />
					bohdan
				</h1>
				<img src={my_photo} alt='man' />
			</div>
		</SizeBlock>
	)
}