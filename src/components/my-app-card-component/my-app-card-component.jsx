import React, { useContext } from 'react';
import './my-app-card-component-styles.scss';
import img1 from '../../imgs/touristico-app-img.jpg';
import img2 from '../../imgs/yugi-app-img.jpg';
import { MyContext } from '../../context';

function MyAppCard(props) {
	// useContext hook for app state
	const state = useContext(MyContext);
	// destructuring app state
	const { myClasses } = state;
	// render component
	return (
		<>
			<div className={`my-app ${myClasses.bg}`}>
				<div className={`my-app-btns ${myClasses.bg}`}>
					<a
						className="btn"
						href={
							props.title === 'Touristico'
								? 'https://github.com/ggnino/touristico'
								: 'https://github.com/ggnino/yugioh'
						}
						id="source"
						target="_blank"
						rel="noreferrer"
					>
						Source Code
					</a>
					<a
						className="btn"
						target="_blank"
						rel="noreferrer"
						id="live"
						href={
							props.title === 'Touristico'
								? 'https://touristico.herokuapp.com'
								: 'https://yugioh-decker.herokuapp.com'
						}
					>
						Live
					</a>
					<p className={`${myClasses.text}`}>
						{props.title === 'Touristico'
							? 'This is a mock app for a tour agency with user authentication. I built the front-end of the app using SCSS with ReactJS. The back-end was built using NodeJS with Express. For authentication JSON web tokens were used, connected to/pulling data from a MongoDB database. Contact me for login credentials or use signup feature.'
							: 'This just a web app I built while having some downtime between jobs. It is a Yu-Gi-Oh! deck builder app, for Yu-Gi-Oh! fans to search and build their own decks. Has info for non Yu-Gi-Oh! fans to find out a bit more about the game. I built this with SCSS, ReactJS and using the Yu-Gi-Oh! API by YGOPRODeck to get card data.'}
					</p>
					<div className="my-app-img">
						<h2
							className="my-heading"
							id={props.title === 'Yugioh' ? 'yugi' : ''}
						>
							{props.title}
						</h2>
						<img
							src={props.title === 'Touristico' ? img1 : img2}
							alt={`${props.title.toLowerCase()}-app-img`}
						/>
					</div>
				</div>
			</div>
		</>
	);
}

export default MyAppCard;
