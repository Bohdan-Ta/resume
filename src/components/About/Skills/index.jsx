import styled from 'styled-components'

const Section = styled.div`
	width: 100%;
	margin: 100px 0;

	h1 {
		text-align: center;
		font-size: 60px;
		color: #fff;
		text-transform: capitalize;
		font-weight: 300;
		margin-bottom: 40px;
	}
`
const Container = styled.div`
	width: 95%;
	margin: auto;
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-gap: 100px;
	color: #fff;
`
const Skill = styled.div`
	position: relative;
	p {
		text-align: center;
		opacity: 0.5;
		font-size: 18px;
		line-height: 30px;
	}

	div {
		margin: 0 auto;
		/* position: absolute;
		top: 80px;
		right: calc(50% - 80px); */
		width: 150px;
		height: 150px;
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 22px;
		border-radius: 50%;
		border: 10px solid;
	}

	&:nth-child(1) {
		div {
			background: #ffed4f28;
			border-color: #ffed4f;
			color: #ffed4f;
		}
	}
	&:nth-child(2) {
		div {
			background: #4fa0ff28;
			border-color: #4fa0ff;
			color: #4fa0ff;
		}
	}
	&:nth-child(3) {
		div {
		
			background: #ff4f4f28;
			border-color: #ff4f4f;
			color: #ff4f4f;
		}
	}
	&:nth-child(4) {
		div {
			background: #52ff4f28;
			border-color: #52ff4f;
			color: #52ff4f;
		}
	}
	&:nth-child(5) {
		div {
			background: #4fdfff28;
			border-color: #4fdfff;
			color: #4fdfff;
		}
	}
	&:nth-child(6) {
		div {
			background: #6370e428;
			border-color: #d9e8eb;
			color: #4fdfff;
		}
	}
`

export const Skills = () => {
	return (
		<Section>
			<h1>skills</h1>
			<Container>
				<Skill>
					<div>JavaScript</div>
					<p>
						I have knowledge of JS at a level that allows me to build sites with interactive elements. I can use
						asynchronous queries. While writing code, I use classes, hooks, classic or arrow functions, and other JS
						capabilities.
					</p>
				</Skill>
				<Skill>
					<div>KOTLIN</div>
					<p>I have Kotlin skills at a level that allows me to develop applications with interactive elements. I can work with asynchronous queries using coroutines. When writing code, I use classes, arrow functions, and other Kotlin capabilities.</p>
				</Skill>
				<Skill>
					<div>GATSBY</div>
					<p>I can leverage asynchronous queries effectively within the Gatsby framework. My skills include working with React components, GraphQL for data querying, and utilizing various Gatsby plugins to enhance website functionality.</p>
				</Skill>
				<Skill>
					<div>NODE.JS</div>
					<p>I have knowledge of using Node.js to create back-end sites and applications.</p>
				</Skill>
				<Skill>
					<div>REACT</div>
					<p>
						React is what allows me to create what the customer wants. Using React with all libraries and frameworks I
						can create an amazing product. While writing a code, I use both classes and hooks. Redux is a great way to
						monitor the status of the application.
					</p>
				</Skill>
				<Skill>
					<div>GIT</div>
					<p>
						Git is something incredible that allows the whole team to work on a project at once. It gives experience of
						team work on the project, the ability to create projects, configure the project for team work, resolve
						conflicts in the implementation of commits.
					</p>
				</Skill>
			</Container>
		</Section>
	)
}
