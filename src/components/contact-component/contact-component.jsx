import React, { useContext, useEffect } from "react";
import "./contact-component-styles.scss";
import { useInView } from "react-intersection-observer";
import { MyContext } from "../../context";
import img1 from "../../imgs/contact.png";

function Contact() {
	// useContext hook for app state
	const state = useContext(MyContext);
	// destructuring app state
	const { setRefs, myClasses } = state;
	// useInView hook for element view
	const [ref, inView] = useInView({ threshold: 0.2 });
	// useEffect hook for setting element views
	useEffect(() => {
		// if element is in view
		if (inView) {
			// set element view reference
			setRefs((r) => {
				return { ...r, ref4: inView };
			});
		}
		// if element is not in view
		else if (!inView) {
			// set element view reference
			setRefs((r) => {
				return { ...r, ref4: inView };
			});
		}
	}, [inView, setRefs]);
	// render component
	return (
		<section
			className={`contact flex flex-col ${myClasses.bg} ${myClasses.borderTop}`}
			id="contact"
			ref={ref}
		>
			<div className="contact-img">
				<img src={img1} alt="" />
				<h2 className={`heading ${myClasses.text}`}>Contact Me</h2>
				<h2 className="heading">
					<a
						className={`${myClasses.text}`}
						type="email"
						href="mailto:ggnino18@gmail.com"
					>
						Here
					</a>
				</h2>
				<i className="arrow"></i>
			</div>
		</section>
	);
}

export default Contact;
