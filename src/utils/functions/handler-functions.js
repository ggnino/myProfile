// onClick handler for click events
const onClick = (myClasses, setMyClasses) => {
	return (e) => {
		// if click is from slider element
		if (e.target.id === "slider") {
			// if slider is on dark mode
			if (myClasses.slider === "on-dark") {
				// set classes for light mode
				setMyClasses((c) => {
					return {
						...c,
						nav: "navbar bg-light light-color",
						bg: "bg-light",
						slider: "on-light",
						text: "light-color",
					};
				});
			}
			// else if slider is on light mode set classes for dark mode
			else
				setMyClasses((c) => {
					return {
						...c,
						nav: "navbar bg-dark dark-color",
						bg: "bg-dark",
						slider: "on-dark",
						text: "dark-color",
					};
				});
		}
	};
};
// onHover handler for hover effect
const onHover1 = function (myClasses, setMyClasses) {
	return (e, view = null) => {
		// variables
		const event = e.type; // event type
		const element = e.target.className; // element class name

		// if hover effect is mouse enter and it is from the projects image element
		if (e.target.alt === "projects-img" && event === "mouseenter") {
			// if element is in view
			if (view) {
				// set background image
				setMyClasses((c) => {
					// if light mode is on
					if (myClasses.text === "light-color") {
						// set proper background styling
						return {
							...c,
							fill: "light-fill",
							myBg: "my-background",
						};
					}
					// if dark mode on, set proper background styling
					else
						return {
							...c,
							fill: "default-fill",
							myBg: "my-background",
						};
				});
			}
			// not in view, no hover effect
			else
				setMyClasses((c) => {
					return {
						...c,
						fill: "",
						myBg: "",
					};
				});
		}
		// if hover effect is mouse leave and it is from the projects image element
		else if (
			e.target.alt === "projects-img" &&
			event === "mouseleave" &&
			view
		) {
			// remove set background image
			setMyClasses((c) => {
				// if light mode is on
				if (myClasses.text === "light-color")
					// set fill color
					return {
						...c,
						myBg: "",
						fill: "dark-fill",
					};
				else
					return {
						...c,
						myBg: "",
						fill: "light-fill",
					};
			});
		}
		// if hover effect is mouse enter and it is from the about element or the image in about me
		else if (
			(element.includes("about") || element === "my-img") &&
			event === "mouseenter"
		) {
			// set fill color
			setMyClasses((c) => {
				if (myClasses.text === "light-color")
					return { ...c, fill: "dark-fill" };
				else return { ...c, fill: "default-fill" };
			});
		}
		// if hover effect is mouse leave and it is from the about element or the image in about me
		else if (
			(element.includes("about") || element === "my-img") &&
			event === "mouseleave"
		) {
			setMyClasses((c) => {
				// if light mode is on set fill color to dark
				if (myClasses.text === "light-color")
					return { ...c, fill: "dark-fill" };
				// else fill color to light
				else return { ...c, fill: "light-fill" };
			});
		}
	};
};
export { onClick, onHover1 };
