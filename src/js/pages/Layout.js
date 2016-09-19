import React from "react";

import dispatcher from "../dispatcher";

import Nav from "../components/Nav";

import {
	ToastContainer,
	ToastMessage,
} from "react-toastr";

export default class Layout extends React.Component {
	constructor() {
		super();
		dispatcher.register(this.handleAction.bind(this));
	}

	handleAction(action) {
		switch(action.type) {
			case "TOAST": {
				this.toastr(action.title, action.message, action.messageType);
			}
		}
	}

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
		const { location } = this.props;
		var divStyle = {
			margin: '50px',
		};

		const ToastMessageFactory = React.createFactory(ToastMessage.animation);

		return (
			<div>
				<Nav location={location} />

				<div style={divStyle}>
					<ToastContainer
					toastMessageFactory={ToastMessageFactory}
					ref="container"
					className="toast-top-right"
					/>
				</div>

				<div class="container">
					{this.props.children}
				</div>
			</div>
		)
	}
}