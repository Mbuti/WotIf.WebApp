import _ from "lodash";
import React from "react";

import * as defaultAnswerService from "../defaultAnswerService";
import dispatcher from "../dispatcher";
import * as questionnaireProxy from "../questionnaireProxy";

import SurveyQuestion from "./SurveyQuestion";

export default class Questionnaire extends React.Component {
	constructor() {
		super();
		this.state = {
			surveyId: "",
			questionnaire: {}
		};
	}

	updateQuestionnaire() {
		if (this.props.surveyId !== "" && this.props.surveyId !== this.state.surveyId)
		{
			this.setState({surveyId: this.props.surveyId});
			questionnaireProxy.getQuestionnaire(this.props.surveyId, this.getQuestionnaireSuccess.bind(this), this.toast.bind(this));
		}
	}

	getQuestionnaireSuccess(questionnaire) {
		this.setState({questionnaire: JSON.parse(questionnaire)});
		this.updateDefaultAnswers();
	}

	setDefaultAnswers(defaultAnswers) {
		this.setState({answers: defaultAnswers});
	}

	updateDefaultAnswers() {
		var defaults = [];
		for (var i = 0; i < this.state.questionnaire.Questions.length; i++) {
			var entry = {
				questionId: this.state.questionnaire.Questions[i].QuestionId,
				answer: defaultAnswerService.getDefaultAnswer(this.state.questionnaire.Questions[i].Type)
			};

			defaults = defaults.concat([entry]);
		}

		this.setDefaultAnswers(defaults);
	}

	toast(title, body, type) {
		dispatcher.dispatch({type: "TOAST", title: title, message: body, messageType: type});
	}

	confirmQuestionnaireSubmission(e) {
		if(confirm("Are you sure you want to submit your answers?")) {
			e.preventDefault();
			this.submitQuestionnaire();
		}
	}

	submitQuestionnaire() {
		questionnaireProxy.submitQuestionnaireAnswers({}, () => {}, this.toast.bind(this));
	}

	render() {
		this.updateQuestionnaire(); // This is what causes the warning in the console

		var title = "";
		var description = "";
		var date = "";
		var ListOfQuestions = [];

		if (_.isEmpty(this.state.questionnaire) !== true) {
			title = this.state.questionnaire.SurveyTitle;
			description = this.state.questionnaire.SurveyDescription;
			date = this.state.questionnaire.SurveyCreatedDate;
			ListOfQuestions = this.state.questionnaire.Questions.map((question) => {
				return <SurveyQuestion key={question.QuestionId} questionId={question.QuestionId} type={question.Type} text={question.Text} handleChange={this.props.handleChange} />
			});
		}
		
		return (
			<div class="row">
      		<div class="col-lg-6">
    		<div class="well bs-component">
			<form onSubmit={this.confirmQuestionnaireSubmission.bind(this)} class="form-horizontal">
				<fieldset>
					<legend>
						{title}<br />
						<h5>{description}</h5>
						<h6>({date})</h6>
					</legend>
					{ListOfQuestions}
				</fieldset>
				<button type="reset" class="btn btn-default">Cancel</button>
				<button type="submit" class="btn btn-primary">Submit</button>
			</form>
			</div>
			</div>
			</div>
		)
	}
}