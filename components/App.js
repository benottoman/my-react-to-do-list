import React from 'react'
import TextInput from './TextInput'



export default class App extends React.Component {
    render(){
        return (
        	<div className="test">
            	<h1>This is the App Component.</h1>

            	<TextInput />
            </div>
        );
    }
}
