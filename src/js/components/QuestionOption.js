import React from "react";

export default class QuestionOption extends React.Component {
	render() {
		return (
			<option value={this.props.questionId}>{"(" + this.props.questionType + ") " + this.props.questionText}</option>
		)
	}
}