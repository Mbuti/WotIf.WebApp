import React from "react";

export default class QuestionTypeOption extends React.Component {
	render() {
		return (
			<option value={this.props.questionType}>{this.props.questionType}</option>
		)
	}
}