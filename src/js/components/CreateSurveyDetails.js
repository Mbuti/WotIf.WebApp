import React from "react";

import dispatcher from "../dispatcher";
import * as questionProxy from "../questionProxy";
import * as questionnaireProxy from "../questionnaireProxy";
import * as surveyProxy from "../surveyProxy";

import CustomOption from "./CustomOption";

export default class CreateSurveyDetails extends React.Component {
	constructor() {
		super();

		this.state = {
			questions: [],
			selectedQuestions: [],
			surveyName: "",
			surveyDescription: ""
		};
	}

	componentWillMount() {
		questionProxy.getQuestions(this.getQuestionsSuccess.bind(this), this.toast.bind(this));
	}

	getQuestionsSuccess(questions) {
		this.setState({questions: JSON.parse(questions)});
	}

	toast(title, body, type) {
		dispatcher.dispatch({type: "TOAST", title: title, message: body, messageType: type});
	}

	handleChange(propertyName, e) {
		var change = {};
		change[propertyName] =  e.target.value;
		this.setState(change);
	}

	questionSelected(e) {
		if (e.target.value !== "") {
			this.setState({selectedQuestions: this.state.selectedQuestions.concat([parseInt(e.target.value)])});
		}
	}

	createSurvey(e) {
		e.preventDefault();

		var data = {
			Title: this.state.surveyName,
			Description: this.state.surveyDescription
		};

		surveyProxy.createSurvey(data, this.createSurveySuccess.bind(this), this.toast.bind(this));
	}

	createSurveySuccess(response) {
		var responseJson = JSON.parse(response);
		var surveyId = responseJson.SurveyId;
		
		var data = {
			SurveyId: JSON.parse(response).SurveyId,
			QuestionIds: this.state.selectedQuestions
		};

		questionnaireProxy.createQuestionnaire(data, this.createQuestionnaireSuccess.bind(this), this.toast.bind(this));
	}

	createQuestionnaireSuccess() {
		this.toast("Survey", "The new survey has been added successfully", "success");
	}

	render() {
		var SelectedQuestions = [];
		if (this.state.selectedQuestions.length > 0) {
			SelectedQuestions = this.state.selectedQuestions.map((selectedQuestion) => {
				var matchingQuestion = {};
				for (var i = 0; i < this.state.questions.length; i++) {
					if (this.state.questions[i].QuestionId == selectedQuestion) {
						matchingQuestion = this.state.questions[i];
						break;
					}
				}
				return (<li key={i}>({matchingQuestion.Type}) {matchingQuestion.Text}</li>)
			});
		}

		var ListOfQuestions = [];
		if (this.state.questions.length > 0) {
			ListOfQuestions = this.state.questions.map((question) => {
				if (this.state.selectedQuestions.indexOf(question.QuestionId) == -1) {
					return <CustomOption key={question.QuestionId} value={question.QuestionId} text={"(" + question.Type + ") " + question.Text} />
				}
			});
		}
		
		return (
			<div class="row">
      		<div class="col-lg-6">
    		<div class="well bs-component">
			<form onSubmit={this.createSurvey.bind(this)} class="form-horizontal">
				<fieldset>
					<legend>Make a new survey</legend>

					<div class="form-group">
						<label for="surveyName" class="col-lg-2 control-label">Survey name</label>
						<div class="col-lg-10">
							<input id="surveyName" value={this.state.surveyName} onChange={this.handleChange.bind(this, 'surveyName')} required />
						</div>
					</div>

					<div class="form-group">
						<label for="surveyDescription" class="col-lg-2 control-label">Survey description</label>
						<div class="col-lg-10">
							<input id="surveyDescription" value={this.state.surveyDescription} onChange={this.handleChange.bind(this, 'surveyDescription')} required />
						</div>
					</div>

					<div class="form-group">
						<label for="question" class="col-lg-2 control-label">Questions</label>
						<div class="col-lg-10">
							<ul>
								{SelectedQuestions}
							</ul>
							<select id="question" onChange={this.questionSelected.bind(this)} class="form-control">
								<option value="">==SELECT==</option>
								{ListOfQuestions}
							</select>
						</div>
					</div>

					<button type="reset" class="btn btn-default">Cancel</button>
    				<button type="submit" class="btn btn-primary">Create</button>
				</fieldset>
			</form>
			</div>
			</div>
			</div>
		)
	}
}