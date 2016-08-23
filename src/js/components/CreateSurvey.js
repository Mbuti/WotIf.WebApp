import React from "react";

import * as questionProxy from "../questionProxy";
import * as surveyProxy from "../surveyProxy";

import QuestionOption from "./QuestionOption";

export default class CreateSurvey extends React.Component {
	constructor() {
		super();

		this.state = {
			questions: [],
			surveyName: ""
		}
	}

	componentWillMount() {
		questionProxy.getQuestions(this.getQuestionsSuccess.bind(this), this.toast.bind(this));
	}

	getQuestionsSuccess(questions) {
		this.setState({questions: JSON.parse(questions)});
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

	createSurvey(e) {
		e.preventDefault();
	}

	render() {
		var ListOfQuestions = [];
		if (this.state.questions.length > 0) {
			ListOfQuestions = this.state.questions.map((question) => {
				return <QuestionOption key={question.QuestionId} questionId={question.QuestionId} questionText={question.Text} questionType={question.Type} />
			});
		}
		
		return (
			<div>
				<h2>Create a Survey</h2>
				<form onSubmit={this.createSurvey.bind(this)}>
					<h3>Survey Name</h3>
					<input id="surveyName" value={this.state.surveyName} onChange={this.handleChange.bind(this, 'surveyName')} required />

					<h3>Questions</h3>
					<select id="question" required>
						<option value="">==SELECT==</option>
						{ListOfQuestions}
					</select>
				</form>
			</div>
		)
	}
}