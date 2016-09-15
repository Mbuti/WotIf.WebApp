import React from "react";

export default class SurveyQuestion extends React.Component {
	render() {
		switch(this.props.type) {
			case "YesNo":
				return (
					<div class="form-group">
						<label for={this.props.questionId} class="control-label">{this.props.text}</label>
						<div class="col-lg-10">
							<input type="radio" name={this.props.questionId} value="true" onChange={this.props.handleChange.bind(this, this.props.questionId)} defaultChecked /> Yes<br />
							<input type="radio" name={this.props.questionId} value="false" onChange={this.props.handleChange.bind(this, this.props.questionId)} /> No
						</div>
					</div>
				)
				break;

			case "Decimal":
				return (
					<div class="form-group">
						<label for={this.props.questionId} class="control-label">{this.props.text}</label>
						<div class="col-lg-10">
							<input id={this.props.questionId} onChange={this.props.handleChange.bind(this, this.props.questionId)} class="form-control" />
						</div>
					</div>
				)
				break;

			case "Integer":
				return (
					<div class="form-group">
						<label for={this.props.questionId} class="control-label">{this.props.text}</label>
						<div class="col-lg-10">
							<input type="number" id={this.props.questionId} onChange={this.props.handleChange.bind(this, this.props.questionId)} class="form-control" />
						</div>
					</div>
				)
				break;

			case "Money":
				return (
					<div class="form-group">
						<label for={this.props.questionId} class="control-label">{this.props.text}</label>
						<div class="col-lg-10">
							R <input type="number" id={this.props.questionId} step="0.01" onChange={this.props.handleChange.bind(this, this.props.questionId)} class="form-control" />
						</div>
					</div>
				)
				break;

			case "Text":
				return (
					<div class="form-group">
						<label for={this.props.questionId} class="control-label">{this.props.text}</label>
						<div class="col-lg-10">
							<textarea id={this.props.questionId} onChange={this.props.handleChange.bind(this, this.props.questionId)} class="form-control" />
						</div>
					</div>
				)
				break;

		}
		return(<p>Unsupported question type: {this.props.type}</p>);
	}
}