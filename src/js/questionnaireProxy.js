export function getQuestionnaire(surveyId, success, toast) {
	var xmlhttp = new XMLHttpRequest();
	var title = "Fetch Questionnaire";
	xmlhttp.onreadystatechange = function() {
		if (xmlhttp.readyState === XMLHttpRequest.DONE && xmlhttp.status !== 200) {
			toast(title, xmlhttp.status + " " + xmlhttp.responseText, "error");
		}
		if (xmlhttp.readyState === XMLHttpRequest.DONE && xmlhttp.status === 200) {
			success(xmlhttp.response);
		}
	};
	xmlhttp.onerror = function() {
		toast(title, "Could not contact the server to fetch questionnaire", "error");
	};
	xmlhttp.open("GET", "http://localhost:8090/api/Questionnaire/GetQuestionnaire?surveyId="+surveyId);
	xmlhttp.send();
}

export function createQuestionnaire(data, success, toast) {
	var xmlhttp = new XMLHttpRequest();
	var title = "Create Questionnaire";
	xmlhttp.onreadystatechange = function() {
		if (xmlhttp.readyState === XMLHttpRequest.DONE && xmlhttp.status !== 200) {
			toast(title, xmlhttp.status + " " + xmlhttp.responseText, "error");
		}
		if (xmlhttp.readyState === XMLHttpRequest.DONE && xmlhttp.status === 200) {
			toast(title, "", "success");
			success();
		}
	};
	xmlhttp.onerror = function() {
		toast(title, "Could not contact the server to create the questionnaire", "error");
	};
	xmlhttp.open("POST", "http://localhost:8090/api/Questionnaire/Create");
	xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
	xmlhttp.send(JSON.stringify(data));
}

export function submitQuestionnaireAnswers(data, success, toast) {
	var xmlhttp = new XMLHttpRequest();
	var title = "Submit Questionnaire Answers";
	xmlhttp.onreadystatechange = function() {
		if (xmlhttp.readyState === XMLHttpRequest.DONE && xmlhttp.status !== 200) {
			toast(title, xmlhttp.status + " " + xmlhttp.responseText, "error");
		}
		if (xmlhttp.readyState === XMLHttpRequest.DONE && xmlhttp.status === 200) {
			toast(title, "", "success");
			success(xmlhttp.response);
		}
	};
	xmlhttp.onerror = function() {
		toast(title, "Could not contact the server to create submit questionnaire answers", "error");
	};
	xmlhttp.open("POST", "http://localhost:8090/api/Questionnaire/Submit");
	xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
	xmlhttp.send(JSON.stringify(data));
}