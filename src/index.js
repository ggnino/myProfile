import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// variable for root node
const root = ReactDOM.createRoot(document.getElementById('root'));
// mount app
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
