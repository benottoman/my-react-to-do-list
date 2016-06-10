import React from 'react'				// var React = require('react');
import { render } from 'react-dom' 		// var render = require('react-dom').render;
import App from '../components/App'


const app = document.getElementById('app');

render(
    <App/>, // Define the encompassing component
    app     // DOM element we want to mount it to
)