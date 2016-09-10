import React from "react";

import CreateQuestion from "./CreateQuestion";
import CreateSurvey from "./CreateSurvey";
import Nav from "./Nav";
import Survey from "./Survey";

import {
	ToastContainer,
	ToastMessage,
} from "react-toastr";

export default class Layout extends React.Component {
	toastr(title, message, type) {
		switch(type)
		{
			case "success":
			this.refs.container.success(message, title, {
				closeButton: true,
				preventDuplicates: false
			});
			break;

			case "error":
			this.refs.container.error(message, title, {
				closeButton: true,
				preventDuplicates: false
			});
			break;
		}
	}

	render() {
		var divStyle = {
			margin: '50px',
		};

		const ToastMessageFactory = React.createFactory(ToastMessage.animation);

		return (
			<div>
				<Nav />

				<div style={divStyle}>
					<ToastContainer
					toastMessageFactory={ToastMessageFactory}
					ref="container"
					className="toast-top-right"
					/>
				</div>

				<div class="container">
					<h1>WotIf?</h1>

					<CreateQuestion toastr={this.toastr.bind(this)} />

					<hr />

					<CreateSurvey toastr={this.toastr.bind(this)} />

					<hr />

					<Survey toastr={this.toastr.bind(this)} />
				</div>
			</div>
		)
	}
}