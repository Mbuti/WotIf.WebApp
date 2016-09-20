import React from "react";

import dispatcher from "../dispatcher";
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
		dispatcher.dispatch({type: "TOAST", title: title, message: body, messageType: type});
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

		dispatcher.dispatch({type: "QUESTIONS_UPDATED"});
	}

	render() {
		var ListOfQuestionTypes = [];
		if (this.state.questionTypes.length > 0) {
			ListOfQuestionTypes = this.state.questionTypes.map((questionType) => {
				return <CustomOption key={questionType} value={questionType} text={questionType} />
			});
		}

		return (
    		<div class="well bs-component">
			<form onSubmit={this.createQuestion.bind(this)} class="form-horizontal">
				<fieldset>
					<legend>Add a new question</legend>

					<div class="form-group">
						<label for="questionText" class="col-lg-2 control-label">Question text</label>
						<div class="col-lg-10">
							<input id="questionText" value={this.state.questionText} onChange={this.handleChange.bind(this, 'questionText')} class="form-control" required />
						</div>
					</div>

					<div class="form-group">
						<label for="questionType" class="col-lg-2 control-label">Question type</label>
						<div class="col-lg-10">
							<select id="questionType" value={this.state.questionType} onChange={this.handleChange.bind(this, 'questionType')} class="form-control" required>
								<option value="">==SELECT==</option>
								{ListOfQuestionTypes}
							</select>
						</div>
					</div>
					
					<button type="reset" class="btn btn-default">Cancel</button>
    				<button type="submit" class="pull-right btn btn-primary">Create</button>
				</fieldset>
			</form>
			</div>
		)
	}
}