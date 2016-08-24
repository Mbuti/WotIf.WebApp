import _ from "lodash";
import React from "react";

import * as questionnaireProxy from "../questionnaireProxy";

import SurveyQuestion from "./SurveyQuestion";

export default class Questionnaire extends React.Component {
	constructor() {
		super();
		this.state = {
			questionnaire: {}
		};
	}

	componentWillMount() {
		if (this.props.surveyId !== "")
		{
			questionnaireProxy.getQuestionnaire(this.props.surveyId, this.getQuestionnaireSuccess.bind(this), this.toast.bind(this));
		}
	}

	getQuestionnaireSuccess(questionnaire) {
		this.setState({questionnaire: JSON.parse(questionnaire)});
	}

	toast(title, body, type) {
		this.props.toastr();
		this.props.toastr(title, body, type);
	}

	render() {
		var title = "";
		var description = "";
		var date = "";
		var ListOfQuestions = [];

		if (_.isEmpty(this.state.questionnaire) !== true) {
			console.log(this.state.questionnaire);
			title = this.state.questionnaire.SurveyTitle;
			description = this.state.questionnaire.SurveyDescription;
			date = this.state.questionnaire.SurveyCreatedDate;
			ListOfQuestions = this.state.questionnaire.Questions.map((question) => {
				return <SurveyQuestion key={question.QuestionId} type={question.Type} text={question.Title} />
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