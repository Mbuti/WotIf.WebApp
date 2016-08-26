import _ from "lodash";
import React from "react";

import * as defaultAnswerService from "../defaultAnswerService";
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

	updateDefaultAnswers() {
		var defaults = [];
		for (var i = 0; i < this.state.questionnaire.Questions.length; i++) {
			var entry = {
				questionId: this.state.questionnaire.Questions[i].QuestionId,
				answer: defaultAnswerService.getDefaultAnswer(this.state.questionnaire.Questions[i].Type)
			};

			defaults = defaults.concat([entry]);
		}

		this.props.setDefaultAnswers(defaults);
	}

	toast(title, body, type) {
		this.props.toastr();
		this.props.toastr(title, body, type);
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
			<div>
				<h3>Questionnaire</h3>
				<h4>{title}</h4>
				<h5>{description}</h5>
				<h5>{date}</h5>
				{ListOfQuestions}
			</div>
		)
	}
}