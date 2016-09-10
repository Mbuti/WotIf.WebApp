import React from "react";

import * as questionnaireProxy from "../questionnaireProxy";
import * as surveyProxy from "../surveyProxy";

import CustomOption from "../components/CustomOption";
import Questionnaire from "../components/Questionnaire";

export default class Survey extends React.Component {
	constructor() {
		super();

		this.state = {
			surveys: [],
			surveyId: "",
			questions: [],
			answers: [] // [{questionId: 1, answer: "Answer1"}, {questionId: 2, answer: "Answer2"}]
		};
	}

	componentWillMount() {
		surveyProxy.getSurveys(this.getSurveysSuccess.bind(this), this.toast.bind(this));
	}

	getSurveysSuccess(surveys) {
		this.setState({surveys: JSON.parse(surveys)});
	}

	toast(title, body, type) {
		this.props.toastr();
		this.props.toastr(title, body, type);
	}

	changeSurvey(e) {
		this.setState({surveyId: e.target.value});
	}

	setDefaultAnswers(defaultAnswers) {
		this.setState({answers: defaultAnswers});
		this.toast("Default Answers", "Default answers have been updated", "success");
		console.log(this.state.answers);
	}

	confirmQuestionnaireSubmission(e) {
		if(confirm("Are you sure you want to submit your answers?")) {
			e.preventDefault();
			this.submitQuestionnaire();
		}
	}

	submitQuestionnaire() {
		console.log(this.state);
		// questionnaireProxy.submitQuestionnaireAnswers()
	}

	submitQuestionnaireSuccess() {
		this.toast("Submit Answers", "Successfully submitted your answers", "success");
	}

	handleChange(questionId, e) {
		var answers = this.state.answers;
		for (var i = 0; i < this.state.answers.length; i++) {
			var entry = this.state.answers[i];

			if (entry.questionId == questionId) {
				entry.answer = e.target.value;
				answers[i] = entry;

				this.setState({answers: answers});
				return;
			}
		}

		var newEntry = {
			questionId: questionId,
			answer: e.target.value
		};

		this.setState({answers: this.state.answers.concat([newEntry])});
	}

	render() {
		var ListOfSurveys = [];
		if (this.state.surveys.length > 0) {
			ListOfSurveys = this.state.surveys.map((survey) => {
				return <CustomOption key={survey.SurveyId} value={survey.SurveyId} text={survey.Title} />
			});
		}

		return (
			<div>
				<h2>Complete a Survey</h2>
				<select id="surveyId" value={this.state.surveyId} onChange={this.changeSurvey.bind(this)}>
					<option value="">==SELECT==</option>
					{ListOfSurveys}
				</select>

				<form onSubmit={this.submitQuestionnaire.bind(this)}>
					<Questionnaire surveyId={this.state.surveyId} handleChange={this.handleChange.bind(this)} setDefaultAnswers={this.setDefaultAnswers.bind(this)} />
					<button onClick={this.confirmQuestionnaireSubmission.bind(this)}>Submit</button>
				</form>
			</div>
		)
	}
}