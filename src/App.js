import Navbar from './components/navbar-component/navbar-component';
import './App.scss';
import './utils/styles.scss';
import './utils/utility.scss';
import Header from './components/header-component/header-component';
import AboutMe from './components/about-component/about-component';
import { MyContext } from './context';
import { useEffect, useState } from 'react';
import Projects from './components/projects-component/projects-component';
import Contact from './components/contact-component/contact-component';

function App() {
	// useState hook for element reference
	const [refs, setRefs] = useState({ ref: '', ref2: '', ref3: '', ref4: '' });
	// useState hook for component mount
	const [isMounted, setIsMounted] = useState(false);
	// useState hook for setting classes
	const [myClasses, setMyClasses] = useState({
		border: '0.3rem solid ',
		borderTop: 'border-top',
		borderBottom: '',
		bg: 'bg-dark',
		slider: 'on-dark',
		text: 'dark-color',
		fill: 'light-fill',
		myBg: '',
	});
	// onClick handler for click events
	const onClick = (e) => {
		// if click is from slider element
		if (e.target.id === 'slider') {
			// if slider is on dark mode
			if (myClasses.slider === 'on-dark') {
				// set classes for light mode
				setMyClasses((c) => {
					return {
						...c,
						nav: 'navbar bg-light light-color',
						bg: 'bg-light',
						slider: 'on-light',
						text: 'light-color',
					};
				});
			}
			// else if slider is on light mode set classes for dark mode
			else
				setMyClasses((c) => {
					return {
						...c,
						nav: 'navbar bg-dark dark-color',
						bg: 'bg-dark',
						slider: 'on-dark',
						text: 'dark-color',
					};
				});
		}
	};
	// onHover handler for hover effect
	const onHover = (e, view = null) => {
		// variables
		const event = e.type; // event type
		const element = e.target.className; // element class name

		// if hover effect is mouse enter and it is from the projects image element
		if (e.target.alt === 'projects-img' && event === 'mouseenter') {
			// if element is in view
			if (view) {
				// set background image
				setMyClasses((c) => {
					// if light mode is on
					if (myClasses.text === 'light-color') {
						// set proper background styling
						return {
							...c,
							fill: 'light-fill',
							myBg: 'my-background',
						};
					}
					// if dark mode on, set proper background styling
					else
						return {
							...c,
							fill: 'dark-fill',
							myBg: 'my-background',
						};
				});
			}
			// not in view, no hover effect
			else
				setMyClasses((c) => {
					return {
						...c,
						fill: '',
						myBg: '',
					};
				});
		}
		// if hover effect is mouse leave and it is from the projects image element
		else if (
			e.target.alt === 'projects-img' &&
			event === 'mouseleave' &&
			view
		) {
			// remove set background image
			setMyClasses((c) => {
				// if light mode is on
				if (myClasses.text === 'light-color')
					// set fill color
					return {
						...c,

						myBg: '',
						fill: 'dark-fill',
					};
				else
					return {
						...c,

						myBg: '',
						fill: 'light-fill',
					};
			});
		}
		// if hover effect is mouse enter and it is from the about element or the image in about me
		else if (
			(element.includes('about') || element === 'my-img') &&
			event === 'mouseenter'
		) {
			// set fill color
			setMyClasses((c) => {
				return { ...c, fill: 'default-fill' };
			});
		}
		// if hover effect is mouse leave and it is from the about element or the image in about me
		else if (
			(element.includes('about') || element === 'my-img') &&
			event === 'mouseleave'
		) {
			setMyClasses((c) => {
				// if light mode is on set fill color to dark
				if (myClasses.text === 'light-color')
					return { ...c, fill: 'dark-fill' };
				// else fill color to light
				else return { ...c, fill: 'light-fill' };
			});
		}
	};
	// useEffect hook for styling
	useEffect(() => {
		// if light mode is on
		if (myClasses.text === 'light-color') {
			// set body color to light
			window.document.getElementsByTagName('body')[0].style.backgroundColor =
				'#fff';
			// set background svg fill colors for light
			setMyClasses((c) => {
				return {
					...c,
					borderTop: 'border-top-light',
					fill: 'dark-fill',
				};
			});
			// set border color for light
			setMyClasses((c) => {
				return {
					...c,
				};
			});
		}
		// if dark mode is on
		if (myClasses.text === 'dark-color') {
			// set body color to dark
			window.document.getElementsByTagName('body')[0].style.backgroundColor =
				'#070707';
			// set border to dark
			setMyClasses((c) => {
				return {
					...c,
					borderTop: 'border-top',
				};
			});
			// set svg fill colors for dark
			setMyClasses((s) => {
				return {
					...s,
					fill: 'fill-light',
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
				onHover,
				isMounted,
				setIsMounted,
				clicker: onClick,
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
