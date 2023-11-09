import React, { useEffect } from "react";
import "./about-component-styles.scss";
import img1 from "../../imgs/about-me.png";
import { useInView } from "react-intersection-observer";
import { MyContext } from "../../context";
import { useContext } from "react";
import anime from "animejs";
function AboutMe() {
	// useContext hook for app state
	const state = useContext(MyContext);
	// destructuring app state
	const { setRefs, onHover, myClasses } = state;
	// useInView hook for element view
	const [ref, inView] = useInView({ threshold: 0.5 });
	// useEffect hook for setting animations and element views
	useEffect(() => {
		// if element is in view
		if (inView) {
			// show svg images
			anime({
				targets: [".morph"],
				right: "64vw",
				rotate: 90,
				opacity: 1,
			});
			anime({
				targets: [".morph1"],
				left: "63vw",
				rotate: -90,
				opacity: 1,
			});
			// set element view reference
			setRefs((r) => {
				return { ...r, ref2: inView };
			});
		}
		// if element is not in view
		else if (!inView) {
			// hide svg images
			if (window.innerWidth > 750) {
				anime({
					targets: [".morph "],
					right: "100vw",
					rotate: 90,
					opacity: 0,
				});
				anime({
					targets: [".morph1"],
					left: "100vw",
					rotate: -90,
					opacity: 0,
				});
			}

			// set element view reference
			setRefs((r) => {
				return { ...r, ref2: inView };
			});
		}
	}, [setRefs, myClasses.text, inView]);
	// render component
	return (
		<div className="container">
			<section
				className={`about flex-col ${myClasses.bg} ${myClasses.text} ${myClasses.borderBottom} ${myClasses.borderTop}`}
				ref={ref}
				id="about"
			>
				<svg
					className={`my-svg morph ${myClasses.fill}`}
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 1440 320"
				>
					<path
						fillOpacity="1"
						d="M0,64L0,160L40,160L40,64L80,64L80,32L120,32L120,288L160,288L160,64L200,64L200,32L240,32L240,160L280,160L280,192L320,192L320,256L360,256L360,64L400,64L400,32L440,32L440,224L480,224L480,64L520,64L520,32L560,32L560,288L600,288L600,64L640,64L640,288L680,288L680,192L720,192L720,64L760,64L760,256L800,256L800,64L840,64L840,128L880,128L880,192L920,192L920,128L960,128L960,96L1000,96L1000,224L1040,224L1040,64L1080,64L1080,256L1120,256L1120,224L1160,224L1160,256L1200,256L1200,160L1240,160L1240,192L1280,192L1280,32L1320,32L1320,288L1360,288L1360,256L1400,256L1400,64L1440,64L1440,320L1400,320L1400,320L1360,320L1360,320L1320,320L1320,320L1280,320L1280,320L1240,320L1240,320L1200,320L1200,320L1160,320L1160,320L1120,320L1120,320L1080,320L1080,320L1040,320L1040,320L1000,320L1000,320L960,320L960,320L920,320L920,320L880,320L880,320L840,320L840,320L800,320L800,320L760,320L760,320L720,320L720,320L680,320L680,320L640,320L640,320L600,320L600,320L560,320L560,320L520,320L520,320L480,320L480,320L440,320L440,320L400,320L400,320L360,320L360,320L320,320L320,320L280,320L280,320L240,320L240,320L200,320L200,320L160,320L160,320L120,320L120,320L80,320L80,320L40,320L40,320L0,320L0,320Z"
					></path>
				</svg>
				<h2 className={`heading ${myClasses.text}`} id="about-h2">
					Who is this?
				</h2>
				<div
					className="about-me flex"
					onMouseEnter={onHover}
					onMouseLeave={onHover}
				>
					<div className="about-me-img flex">
						<img className="my-img" src={img1} alt="about-me-img" />
						<p id="aboutMe">
							&emsp;Hey, what's up! My name is Guillermo Gonzalez, I am a full
							stack developer. I love music, I love to dance, so everytime I
							open up my IDE I make sure I code my fingertips off. I like
							working solo but love being a team player.
							<br />
							&emsp; I do have a thing for problem solving as I am a Auto
							Technician that transistioned into web development. I am
							comfortable in leaving my comfort to learn new technologies and
							new information. Even if, I have to go above and beyond, inorder
							to overcome any obstacles that may present itself.
						</p>
					</div>
					<div className="about-me-mern flex-col">
						<p
							className={`${myClasses.text} ${myClasses.bg} ${myClasses.borderColor}`}
						>
							M<span className={`${myClasses.text}`}>ONGODB</span>
						</p>
						<p
							className={`${myClasses.text} ${myClasses.bg} ${myClasses.borderColor}`}
						>
							E<span className={`${myClasses.text}`}>XPRESSJS</span>
						</p>
						<p
							className={`${myClasses.text} ${myClasses.bg} ${myClasses.borderColor}`}
						>
							R<span className={`${myClasses.text}`}>EACTJS</span>{" "}
						</p>
						<p
							className={`${myClasses.text} ${myClasses.bg} ${myClasses.borderColor}`}
						>
							N<span className={`${myClasses.text}`}>ODEJS</span>
						</p>
					</div>
				</div>
				<svg
					className={`my-svg morph1 ${myClasses.fill}`}
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 1440 320"
				>
					<path
						fillOpacity="1"
						d="M0,64L0,160L40,160L40,64L80,64L80,32L120,32L120,288L160,288L160,64L200,64L200,32L240,32L240,160L280,160L280,192L320,192L320,256L360,256L360,64L400,64L400,32L440,32L440,224L480,224L480,64L520,64L520,32L560,32L560,288L600,288L600,64L640,64L640,288L680,288L680,192L720,192L720,64L760,64L760,256L800,256L800,64L840,64L840,128L880,128L880,192L920,192L920,128L960,128L960,96L1000,96L1000,224L1040,224L1040,64L1080,64L1080,256L1120,256L1120,224L1160,224L1160,256L1200,256L1200,160L1240,160L1240,192L1280,192L1280,32L1320,32L1320,288L1360,288L1360,256L1400,256L1400,64L1440,64L1440,320L1400,320L1400,320L1360,320L1360,320L1320,320L1320,320L1280,320L1280,320L1240,320L1240,320L1200,320L1200,320L1160,320L1160,320L1120,320L1120,320L1080,320L1080,320L1040,320L1040,320L1000,320L1000,320L960,320L960,320L920,320L920,320L880,320L880,320L840,320L840,320L800,320L800,320L760,320L760,320L720,320L720,320L680,320L680,320L640,320L640,320L600,320L600,320L560,320L560,320L520,320L520,320L480,320L480,320L440,320L440,320L400,320L400,320L360,320L360,320L320,320L320,320L280,320L280,320L240,320L240,320L200,320L200,320L160,320L160,320L120,320L120,320L80,320L80,320L40,320L40,320L0,320L0,320Z"
					></path>
				</svg>
			</section>
		</div>
	);
}
export default AboutMe;
