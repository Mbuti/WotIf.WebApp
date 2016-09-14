import React from "react";

import dispatcher from "../dispatcher";
import * as surveyProxy from "../surveyProxy";

import CustomOption from "../components/CustomOption";
import Questionnaire from "../components/Questionnaire";

export default class Survey extends React.Component {
	constructor() {
		super();

		this.state = {
			surveys: [],
			surveyId: ""
		};
	}

	componentWillMount() {
		surveyProxy.getSurveys(this.getSurveysSuccess.bind(this), this.toast.bind(this));
	}

	getSurveysSuccess(surveys) {
		this.setState({surveys: JSON.parse(surveys)});
	}

	toast(title, body, type) {
		dispatcher.dispatch({type: "TOAST", title: title, message: body, messageType: type});
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
				<label for="surveyId">Choose a survey</label>
				<select id="surveyId" value={this.state.surveyId} onChange={this.changeSurvey.bind(this)}>
					<option value="">==SELECT==</option>
					{ListOfSurveys}
				</select>
				
				<Questionnaire surveyId={this.state.surveyId} />
			</div>
		)
	}
}