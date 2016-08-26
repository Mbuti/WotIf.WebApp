import React from "react";

export default class SurveyQuestion extends React.Component {
	render() {
		switch(this.props.type) {
			case "YesNo":
				return (
					<div>
						<label for={this.props.questionId}>{this.props.text}</label><br />
						<input type="radio" name={this.props.questionId} value="true" onChange={this.props.handleChange.bind(this, this.props.questionId)} defaultChecked /> Yes<br />
						<input type="radio" name={this.props.questionId} value="false" onChange={this.props.handleChange.bind(this, this.props.questionId)} /> No
					</div>
				)
				break;

			case "Decimal":
				return (
					<div>
						<label for={this.props.questionId}>{this.props.text}</label><br />
						<input id={this.props.questionId} onChange={this.props.handleChange.bind(this, this.props.questionId)} />
					</div>
				)
				break;

			case "Integer":
				return (
					<div>
						<label for={this.props.questionId}>{this.props.text}</label><br />
						<input type="number" id={this.props.questionId} onChange={this.props.handleChange.bind(this, this.props.questionId)} />
					</div>
				)
				break;

			case "Money":
				return (
					<div>
						<label for={this.props.questionId}>{this.props.text}</label><br />
						R <input type="number" id={this.props.questionId} step="0.01" onChange={this.props.handleChange.bind(this, this.props.questionId)} />
					</div>
				)
				break;

			case "Text":
				return (
					<div>
						<label for={this.props.questionId}>{this.props.text}</label><br />
						<textarea id={this.props.questionId} onChange={this.props.handleChange.bind(this, this.props.questionId)} />
					</div>
				)
				break;

		}
		return(<p>Unsupported question type: {this.props.type}</p>);
	}
}