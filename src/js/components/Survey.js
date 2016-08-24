import React from "react";

import * as surveyProxy from "../surveyProxy";

import CustomOption from "./CustomOption";
import Questionnaire from "./Questionnaire";

export default class Survey extends React.Component {
	constructor() {
		super();

		this.state = {
			surveys: [],
			surveyId: "",
			questions: []
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

				<Questionnaire surveyId={this.state.surveyId} />
			</div>
		)
	}
}