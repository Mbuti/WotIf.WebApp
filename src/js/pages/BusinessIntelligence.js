import React from "react";

export default class BusinessIntelligence extends React.Component {
	render() {
		return (
			<div>
				<h1>Business Intelligence</h1>
				<iframe 
					width="800"
					height="600" 
					src="https://app.powerbi.com/view?r=eyJrIjoiOGI1N2Q4NmEtZDkyMS00MjY2LWFhZjEtZjQ1ODliODUwZmI4IiwidCI6Ijg3MjE3YzYwLTE1OWEtNDQxOS05MjhmLTVkNWNjMTk5ZDE1OCIsImMiOjh9"
					frameBorder="0"
					allowFullScreen="true">
				</iframe>
			</div>
		)
	}
}