import React from "react";

export default class SurveyQuestion extends React.Component {
	render() {
		switch(this.props.type) {
			case "YesNo":
				return (
					<div class="form-group">
						<label for={this.props.questionId}>{this.props.text}</label>
						<div class="radio">
							<label>
								<input type="radio" name={this.props.questionId} value="true" onChange={this.props.handleChange.bind(this, this.props.questionId)} defaultChecked />
								Yes
							</label>
						</div>
						<div class="radio">
							<label>
								<input type="radio" name={this.props.questionId} value="false" onChange={this.props.handleChange.bind(this, this.props.questionId)} />
								No
							</label>
						</div>
					</div>
				)
				break;

			case "Decimal":
				return (
					<div class="form-group">
						<label for={this.props.questionId}>{this.props.text}</label>
						<input id={this.props.questionId} onChange={this.props.handleChange.bind(this, this.props.questionId)} class="form-control" />
					</div>
				)
				break;

			case "Integer":
				return (
					<div class="form-group">
						<label for={this.props.questionId}>{this.props.text}</label>
						<input type="number" id={this.props.questionId} onChange={this.props.handleChange.bind(this, this.props.questionId)} class="form-control" />
					</div>
				)
				break;

			case "Money":
				return (
					<div class="form-group">
						<label for={this.props.questionId}>{this.props.text}</label>
						<div class="input-group">
							<span class="input-group-addon">R</span>
							<input type="number" id={this.props.questionId} step="0.01" onChange={this.props.handleChange.bind(this, this.props.questionId)} class="form-control" />
						</div>
					</div>
				)
				break;

			case "Text":
				return (
					<div class="form-group">
						<label for={this.props.questionId}>{this.props.text}</label>
						<textarea id={this.props.questionId} onChange={this.props.handleChange.bind(this, this.props.questionId)} class="form-control" />
					</div>
				)
				break;

		}
		return(<p>Unsupported question type: {this.props.type}</p>);
	}
}