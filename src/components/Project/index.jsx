import styled from 'styled-components'
import { motion } from 'framer-motion'

import projectOne from '../../images/project-1.jpg'
import projectSecond from '../../images/project-2.jpg'
import projectThird from '../../images/project-3.jpg'
import projectFourth from '../../images/project-4.jpg'

const ProjectContainer = styled.div`
	min-height: 100vh;
	padding: 30px 100px 100px;

	h1 {
		font-size: 100px;
		background: #252525;
		text-transform: capitalize;
		text-align: center;
		margin-bottom: 50px;
		color: #1a1a1a;
		background-clip: text;
		-webkit-background-clip: text;
		-webkit-text-stroke: 8px transparent;
	}
`
const ProjectBlock = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	grid-gap: 50px;
`

const Card = styled.div`
	height: 400px;
	position: relative;

	img {
		width: 100%;
		/* height: 100%; */
		position: absolute;
		top: 0;
		left: 0;
		object-fit: cover;
		transition: 0.5s;
	}
	:hover img {
		filter: blur(20px);
	}
`

const Content = styled.div`
	position: relative;
	padding: 40px;
	color: #fff;
	transition: 0.5s;
	opacity: 0;
	&:hover {
		opacity: 1;
	}

	h2 {
		font-size: 50px;
		text-transform: capitalize;
		text-align: center;
		font-weight: 300;
	}
	p {
		margin: 40px;
		font-size: 20px;
		line-height: 30px;
		text-align: center;
	}
`

const ButtonGroup = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	gap: 10px 5px;
`

const BtnGit = styled.button`
	height: 40px;
	text-transform: capitalize;
	font-size: 18px;
	border: 2px solid #000;
	border-radius: 5px;
	background: #000;
	color: #fff;
	cursor: pointer;
	&:hover {
		background: #fff;
		color: #000;
		border-color: #fff;
	}
`
const BtnLive = styled.button`
	height: 40px;
	text-transform: capitalize;
	font-size: 18px;
	border: none;
	background: none;
	border: 2px solid #fff;
	border-radius: 5px;
	color: #fff;
	cursor: pointer;
	&:hover {
		border-color: #000;
	}
`

export default function Project() {
	return (
		<motion.div
			intial={{ width: 0 }}
			animate={{ width: '100%' }}
			exit={{ x: window.innerWidth, transition: { duration: 0.2 } }}
		>
			<ProjectContainer>
				<h1>some of my projects</h1>
				<ProjectBlock>
					<Card>
						<img src={projectOne} alt='abstraction' />
						<Content>
							<h2>hellen-english</h2>
							<p>
								Team project in GoIT. A project to create a site for learning English. The project uses: mobile layout,
								tablet and PC.
							</p>
							<ButtonGroup>
								<BtnGit
									type='button'
									onClick={() => window.open('https://github.com/Viktor-Kostiuchenko/hellen-english', '_blank')}
								>
									github repo
								</BtnGit>
								<BtnLive
									type='button'
									onClick={() => window.open('https://viktor-kostiuchenko.github.io/hellen-english/', '_blank')}
								>
									see live
								</BtnLive>
							</ButtonGroup>
						</Content>
					</Card>
					<Card>
						<img src={projectSecond} alt='abstraction' />
						<Content>
							<h2>Filmoteka</h2>
							<p>
								Team project in GoIT. A project to create a site for selecting and watching rating movies. The project
								uses: Java Scrypt, Axios, Git, Sass
							</p>
							<ButtonGroup>
								<BtnGit type='button' onClick={() => window.open('https://github.com/A-V-Kuzmich/filmoteka', '_blank')}>
									github repo
								</BtnGit>
								<BtnLive
									type='button'
									onClick={() => window.open('https://a-v-kuzmich.github.io/filmoteka/ ', '_blank')}
								>
									see live
								</BtnLive>
							</ButtonGroup>
						</Content>
					</Card>
					<Card>
						<img src={projectThird} alt='abstraction' />
						<Content>
							<h2>Phonebook</h2>
							<p>
								Phonebook that allows you to save contacts and sort them alphabetically. React, Route, Redax, Formik,
								Netlify and other technologies.
							</p>
							<ButtonGroup>
								<BtnGit
									type='button'
									onClick={() => window.open('  https://github.com/Bohdan-Ta/goit-react-hw-08-phonebook ', '_blank')}
								>
									github repo
								</BtnGit>
								<BtnLive type='button' onClick={() => window.open('  https://phonebook-tb.netlify.app ', '_blank')}>
									see live
								</BtnLive>
							</ButtonGroup>
						</Content>
					</Card>
					<Card>
						<img src={projectFourth} alt='abstraction' />
						<Content>
							<h2>Wallet</h2>
							<p>
								Wallet. Team project using React, Node.js, Axios, Route technologies. This application allows you to
								manage your finances.
							</p>
							<ButtonGroup>
								<BtnGit
									type='button'
									onClick={() => window.open('  https://github.com/VladVinichenko/Wallet', '_blank')}
								>
									github repo
								</BtnGit>
								{/* <BtnLive
									type='button'
									onClick={() => window.open('  https://wallet-web-goit.herokuapp.com/ ', '_blank')}
								>
									see live
								</BtnLive> */}
							</ButtonGroup>
						</Content>
					</Card>
				</ProjectBlock>
			</ProjectContainer>
		</motion.div>
	)
}
