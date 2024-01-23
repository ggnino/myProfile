import Navbar from "./components/navbar-component/navbar-component";
import "./App.scss";
import "./utils/styles/styles.scss";
import "./utils/styles/utility.scss";
import Header from "./components/header-component/header-component";
import AboutMe from "./components/about-component/about-component";
import { MyContext } from "./context";
import { useEffect, useRef, useState } from "react";
import Projects from "./components/projects-component/projects-component";
import Contact from "./components/contact-component/contact-component";
import { onClick, onHover1 } from "./utils/functions/handler-functions.js";

function App() {
	// useState hook for element reference
	const [refs, setRefs] = useState({ ref: "", ref2: "", ref3: "", ref4: "" });
	// useState hook for a component mount
	const [isMounted, setIsMounted] = useState(false);
	// useState hook for setting classes
	const [myClasses, setMyClasses] = useState({
		borderBottom: "",
		bg: "bg-dark",
		slider: "on-dark",
		text: "dark-color",
		fill: "light-fill",
		myBg: "",
		nav: "",
	});
	const [project, setProject] = useState({
		source: "",
		live: "",
		img: "",
		desc: "",
	});
	const fn = useRef(setProject);

	// useEffect hook for styling
	useEffect(() => {
		// if light mode is on
		if (myClasses.text === "light-color") {
			// set body color to light
			window.document.getElementsByTagName("body")[0].style.backgroundColor =
				"#fff";
			// set styling for light
			setMyClasses((c) => {
				return {
					...c,
					borderTop: "border-top-light",
					fill: "dark-fill",
					borderColor: "border-light",
				};
			});
		}
		// if dark mode is on
		if (myClasses.text === "dark-color") {
			// set body color to dark
			window.document.getElementsByTagName("body")[0].style.backgroundColor =
				"#070707";
			// set styling to dark
			setMyClasses((c) => {
				return {
					...c,
					borderTop: "border-top",
					fill: "light-fill",
					borderColor: "border",
				};
			});
		}
	}, [myClasses.text]);
	// render app
	return (
		<MyContext.Provider
			value={{
				refs,
				setRefs,
				project, setProject,
				onHover: onHover1(myClasses, setMyClasses),
				isMounted,
				setIsMounted,
				clicker: onClick(myClasses, setMyClasses),
				myClasses,
				setMyClasses,
			}}
		>
			<Navbar />
			<Header />
			<AboutMe />
			<Projects />
			<Contact />
		</MyContext.Provider>
	);
}

export default App;
