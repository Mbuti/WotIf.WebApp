import React from "react";

export default class CustomOption extends React.Component {
	render() {
		return (
			<option value={this.props.value}>{this.props.text}</option>
		)
	}
}