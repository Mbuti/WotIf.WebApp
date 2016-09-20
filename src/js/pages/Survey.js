import React from "react";

import dispatcher from "../dispatcher";
import * as surveyProxy from "../surveyProxy";

import CustomOption from "../components/CustomOption";
import Questionnaire from "../components/Questionnaire";

export default class Survey extends React.Component {
	constructor() {
		super();
		dispatcher.register(this.handleAction.bind(this));

		this.state = {
			surveys: [],
			surveyId: ""
		};
	}

	handleAction(action) {
		switch(action.type) {
			case "RESET_QUESTIONNAIRE": {
				this.setState({surveyId: ""});
			}
		}
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

	getQuestionnaire() {
		if (this.state.surveyId !== "") {
			return <Questionnaire surveyId={this.state.surveyId} />
		}
		else
		{
			return null;
		}
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
				<div class="well bs-component">
				<div class="form-group">
					<label for="surveyId">Choose a survey</label>
					<select id="surveyId" value={this.state.surveyId} onChange={this.changeSurvey.bind(this)} class="form-control" >
						<option value="">==SELECT==</option>
						{ListOfSurveys}
					</select>
				</div>
				</div>

				{this.getQuestionnaire()}
			</div>
		)
	}
}