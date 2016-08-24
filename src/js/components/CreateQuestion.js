import React from "react";

import * as questionProxy from "../questionProxy";

import CustomOption from "./CustomOption";

export default class CreateQuestion extends React.Component {
	constructor() {
		super();

		this.state = {
			questionTypes: [],
			questionText: "",
			questionType: ""
		};
	}

	componentWillMount() {
		questionProxy.getQuestionTypes(this.getQuestionTypesSuccess.bind(this), this.toast.bind(this));
	}

	getQuestionTypesSuccess(questionTypes) {
		this.setState({questionTypes: JSON.parse(questionTypes)});
	}

	toast(title, body, type) {
		this.props.toastr();
		this.props.toastr(title, body, type);
	}

	handleChange(propertyName, e) {
		var change = {};
		change[propertyName] =  e.target.value;
		this.setState(change);
	}

	createQuestion(e) {
		e.preventDefault();

		var questionData = {
			Text: this.state.questionText,
			Type: this.state.questionType
		};

		questionProxy.createQuestion(questionData, this.createQuestionSuccess.bind(this), this.toast.bind(this));
	}

	createQuestionSuccess() {
		this.setState({questionText: ""});
		this.setState({questionType: ""});
	}

	render() {
		var ListOfQuestionTypes = [];
		if (this.state.questionTypes.length > 0) {
			ListOfQuestionTypes = this.state.questionTypes.map((questionType) => {
				return <CustomOption key={questionType} value={questionType} text={questionType} />
			});
		}

		return (
			<div>
				<h2>Create a Question</h2>
				<form onSubmit={this.createQuestion.bind(this)}>
					<h3>Question Text</h3>
					<input id="questionText" value={this.state.questionText} onChange={this.handleChange.bind(this, 'questionText')} required />

					<h3>Question Type</h3>
					<select id="questionType" value={this.state.questionType} onChange={this.handleChange.bind(this, 'questionType')} required>
						<option value="">==SELECT==</option>
						{ListOfQuestionTypes}
					</select>

					<input type="submit" value="Create" />
				</form>
			</div>
		)
	}
}