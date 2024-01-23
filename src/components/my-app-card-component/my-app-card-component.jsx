import React, { useContext, useEffect, useState } from "react";
import "./my-app-card-component-styles.scss";
import img1 from "../../imgs/touristico-app-img.jpg";
import img2 from "../../imgs/yugi-app-img.jpg";
import img3 from "../../imgs/Tierra.png";
import img4 from "../../imgs/dashboard.png";
import { MyContext } from "../../context";

function MyAppCard(props) {
	const state = useContext(MyContext);
	const [project, setProject] = useState({
		source: "",
		live: "",
		img: "",
		desc: "",
	});
	const { myClasses } = state;
	useEffect(() => {
		if (props.title === "Touristico") {
			setProject({
				source: "https://github.com/ggnino/touristico",
				live: "https://touristico-868504110b09.herokuapp.com/",
				img: img1,
				desc: "This is a mock app for a tour agency with user authentication. I built the front-end of the app using SCSS with ReactJS. The back-end was built using NodeJS with Express. For authentication JSON web tokens were used, connected to/pulling data from a MongoDB database. Contact me for login credentials or use signup feature.",
			});
		} else if (props.title === "Yugioh") {
			setProject({
				source: "https://github.com/ggnino/yugioh",
				live: "https://yugioh-deck-builder-c927cea2bffb.herokuapp.com/",
				img: img2,
				desc: "This just a web app I built while having some downtime between jobs. It is a Yu-Gi-Oh! deck builder app, for Yu-Gi-Oh! fans to search and build their own decks. Has info for non Yu-Gi-Oh! fans to find out a bit more about the game. I built this with SCSS, ReactJS and using the Yu-Gi-Oh! API by YGOPRODeck to get card data.",
			});
		} else if (props.title === "Tierra") {
			setProject({
				source: "https://github.com/ggnino/restaurantLanding",
				live: "https://ggnino.github.io/restaurantLanding/",
				img: img3,
				desc: "A landing page design for restaurant clients. The page is based off a plant based restaurant but can be customized for any type of restaurant. Landing page is a simple and straight forward design for easy user navigation.  ",
			});
		} else if (props.title === "iTech Dashboard") {
			setProject({
				source: "https://github.com/ggnino/adminDashBoard",
				live: "https://ggnino.github.io/adminDashBoard/",
				img: img4,
				desc: "A page design for a ticketing service client. The page design is for the technician view. Tech can view how many issues resolved and how many rejected. Average ticket resolve time is displayed as well. Tech can view notifications, account and search on top right. Also a ticket queue is displayed so technician can view and manage their time accordingly.",
			});
		}
	}, [props.title, setProject]);

	// render component
	return (
		<>
			<div className={`my-app round-border ${myClasses.bg}`}>
				<div
					className={`my-app-btns flex flex-col round-border ${myClasses.bg}`}
				>
					<a
						className="btn"
						href={project.source}
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
						href={project.live}
					>
						Live
					</a>
					<p className={`${myClasses.text}`}>{project.desc}</p>
					<div className="my-app-img flex">
						<h2 className="my-heading round-border">{props.title}</h2>
						<img
							className="round-border"
							src={project.img}
							alt={`${props.title.toLowerCase()}-app-img`}
						/>
					</div>
				</div>
			</div>
		</>
	);
}

export default MyAppCard;
