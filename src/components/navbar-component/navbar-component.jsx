import React, { useContext, useEffect } from 'react';
import './navbar-component-styles.scss';
import img1 from '../../imgs/sun.png';
import img2 from '../../imgs/full-moon.png';
import { MyContext } from '../../context';
import anime from 'animejs';

function Navbar() {
	// useContext hook for app state
	const state = useContext(MyContext);
	// destructuring app state
	const { refs, setMyStyle, isMounted, clicker, myClasses, setMyClasses } =
		state;
	// useEffect hook for setting animations and classes
	useEffect(() => {
		// if component mounted and screen width is greater than 1200px
		if (isMounted && window.screen.width > 1200) {
			// show navbar-brand
			anime({
				targets: '.navbar #navbar-brand',
				left: 0,
			});
			// show navbar links
			anime({ targets: '.navbar li', right: 0 });
		}
		// if border-bottom dark class and light-color class are applied
		if (
			myClasses.borderBottom === 'border-bottom' &&
			myClasses.text === 'light-color'
		) {
			// set border-bottom light class
			setMyClasses((c) => {
				return {
					...c,
					borderBottom: 'border-bottom-light',
				};
			});
		}
		// if border-bottom light class and dark-color class are applied
		if (
			myClasses.borderBottom === 'border-bottom-light' &&
			myClasses.text === 'dark-color'
		) {
			// border-bottom dark class
			setMyClasses((c) => {
				return {
					...c,
					borderBottom: 'border-bottom',
				};
			});
		}
		// if header is not in view and no border bottom
		if (!refs.ref && myClasses.borderBottom === '') {
			// set border-bottom
			setMyClasses((c) => {
				// if text is light-color
				if (c.text === 'light-color')
					// set light border
					return {
						...c,
						borderBottom: 'border-bottom-light',
					};
				// else set dark border
				else
					return {
						...c,
						borderBottom: 'border-bottom',
					};
			});
		}
		// if header is in view
		if (refs.ref) {
			// no border
			setMyClasses((c) => {
				return {
					...c,
					borderBottom: '',
				};
			});
		}
	}, [
		refs,
		isMounted,
		setMyClasses,
		myClasses.text,
		myClasses.borderBottom,
		setMyStyle,
	]);
	// render component
	return (
		<nav
			className={`navbar flex ${myClasses.bg} ${myClasses.text} ${myClasses.borderBottom}`}
		>
			<a href="/" id="navbar-brand">
				Guillermo Gonzalez
			</a>
			<ul>
				<li>
					<img src={img1} alt="light-mode-icon" />
				</li>
				<li className="slider-container" onClick={clicker}>
					<span className={myClasses.slider} id="slider"></span>
				</li>
				<li>
					<img src={img2} alt="light-mode-icon" />
				</li>
				<li>
					<a
						className={myClasses.text}
						href="#about"
						style={refs.ref2 ? { color: '#7fff00' } : { color: '' }}
					>
						About
					</a>
				</li>
				<li>
					<a
						className={myClasses.text}
						href="#projects"
						style={refs.ref3 ? { color: '#7fff00' } : { color: '' }}
					>
						Projects
					</a>
				</li>
				<li>
					<a
						className={myClasses.text}
						href="#contact"
						style={refs.ref4 ? { color: '#7fff00' } : { color: '' }}
					>
						Contact
					</a>
				</li>
			</ul>
		</nav>
	);
}

export default Navbar;
