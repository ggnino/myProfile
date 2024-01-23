import React, { useContext, useEffect } from "react";
import "./projects-component-styles.scss";
import img1 from "../../imgs/my-projects.png";
import { useInView } from "react-intersection-observer";
import { MyContext } from "../../context";
import anime from "animejs";
import MyAppCard from "../my-app-card-component/my-app-card-component";
function Projects() {
	// useContext hook for app state
	const state = useContext(MyContext);
	// destructuring app state
	const { setRefs, onHover, myClasses } = state;
	// useInView hook for element view
	const [ref, inView] = useInView({ threshold: 1 });
	// useEffect hook for setting animations and element views
	useEffect(() => {
		// if element is in view
		if (inView) {
			// show svg images
			anime({
				targets: [".morph2"],
				translate: 0,
				opacity: 1,
			});
			anime({
				targets: [".morph3"],
				translate: 0,
				opacity: 1,
			});
			// set element view reference
			setRefs((r) => {
				return {
					...r,
					ref3: inView,
				};
			});
		}
		// if element is not in view
		else if (!inView) {
			if (window.innerWidth > 750) {
				// hide svg images
				anime({
					targets: [".morph2"],
					translate: -10000,
					opacity: 0,
				});
				anime({
					targets: [".morph3"],
					translate: 10000,
					opacity: 0,
				});
			}
			// set element view reference
			setRefs((r) => {
				return {
					...r,
					ref3: inView,
				};
			});
		}
	}, [inView, setRefs]);
	// render component
	return (
		<section
			id="projects"
			className={`projects flex flex-col ${myClasses.bg} ${myClasses.borderTop} ${myClasses.myBg}`}
		>
			<div className={`projects-apps container flex flex-col`}>
				<svg
					className={`${myClasses.fill} my-svg morph2 `}
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 1440 320"
				>
					<path
						fillOpacity="1"
						d="M0,64L0,160L40,160L40,64L80,64L80,32L120,32L120,288L160,288L160,64L200,64L200,32L240,32L240,160L280,160L280,192L320,192L320,256L360,256L360,64L400,64L400,32L440,32L440,224L480,224L480,64L520,64L520,32L560,32L560,288L600,288L600,64L640,64L640,288L680,288L680,192L720,192L720,64L760,64L760,256L800,256L800,64L840,64L840,128L880,128L880,192L920,192L920,128L960,128L960,96L1000,96L1000,224L1040,224L1040,64L1080,64L1080,256L1120,256L1120,224L1160,224L1160,256L1200,256L1200,160L1240,160L1240,192L1280,192L1280,32L1320,32L1320,288L1360,288L1360,256L1400,256L1400,64L1440,64L1440,320L1400,320L1400,320L1360,320L1360,320L1320,320L1320,320L1280,320L1280,320L1240,320L1240,320L1200,320L1200,320L1160,320L1160,320L1120,320L1120,320L1080,320L1080,320L1040,320L1040,320L1000,320L1000,320L960,320L960,320L920,320L920,320L880,320L880,320L840,320L840,320L800,320L800,320L760,320L760,320L720,320L720,320L680,320L680,320L640,320L640,320L600,320L600,320L560,320L560,320L520,320L520,320L480,320L480,320L440,320L440,320L400,320L400,320L360,320L360,320L320,320L320,320L280,320L280,320L240,320L240,320L200,320L200,320L160,320L160,320L120,320L120,320L80,320L80,320L40,320L40,320L0,320L0,320Z"
					></path>
				</svg>
				<h2 className="heading">My Projects</h2>
				<a
					className="projects-apps-imgLink flex flex-col"
					href="https://www.github.com/ggnino/myProfile"
					rel="noreferrer"
					target="_blank"
				>
					<img
						ref={ref}
						onMouseEnter={(e) => onHover(e, inView)}
						onMouseLeave={(e) => onHover(e, inView)}
						className="my-img"
						src={img1}
						alt="projects-img"
						title="Click For Portfolio Source Code"
					/>
				</a>
				<div className={`projects-apps-cards flex`}>
					<MyAppCard title={"Tierra"} />
					<MyAppCard title={"Touristico"} />
					<MyAppCard title={"Yugioh"} />
					<MyAppCard title={"iTech Dashboard"} />
				</div>{" "}
				<svg
					className={`my-svg morph3 ${myClasses.fill}`}
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 1440 320"
				>
					<path
						fillOpacity="1"
						d="M0,64L0,160L40,160L40,64L80,64L80,32L120,32L120,288L160,288L160,64L200,64L200,32L240,32L240,160L280,160L280,192L320,192L320,256L360,256L360,64L400,64L400,32L440,32L440,224L480,224L480,64L520,64L520,32L560,32L560,288L600,288L600,64L640,64L640,288L680,288L680,192L720,192L720,64L760,64L760,256L800,256L800,64L840,64L840,128L880,128L880,192L920,192L920,128L960,128L960,96L1000,96L1000,224L1040,224L1040,64L1080,64L1080,256L1120,256L1120,224L1160,224L1160,256L1200,256L1200,160L1240,160L1240,192L1280,192L1280,32L1320,32L1320,288L1360,288L1360,256L1400,256L1400,64L1440,64L1440,320L1400,320L1400,320L1360,320L1360,320L1320,320L1320,320L1280,320L1280,320L1240,320L1240,320L1200,320L1200,320L1160,320L1160,320L1120,320L1120,320L1080,320L1080,320L1040,320L1040,320L1000,320L1000,320L960,320L960,320L920,320L920,320L880,320L880,320L840,320L840,320L800,320L800,320L760,320L760,320L720,320L720,320L680,320L680,320L640,320L640,320L600,320L600,320L560,320L560,320L520,320L520,320L480,320L480,320L440,320L440,320L400,320L400,320L360,320L360,320L320,320L320,320L280,320L280,320L240,320L240,320L200,320L200,320L160,320L160,320L120,320L120,320L80,320L80,320L40,320L40,320L0,320L0,320Z"
					></path>
				</svg>
			</div>
		</section>
	);
}

export default Projects;
