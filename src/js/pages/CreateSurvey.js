import React from "react";

import CreateQuestion from "../components/CreateQuestion";
import CreateSurveyDetails from "../components/CreateSurveyDetails";

export default class CreateSurvey extends React.Component {
	render() {
		return (
			<div>
				<CreateQuestion />

				<CreateSurveyDetails />
			</div>
		)
	}
}