export function getQuestionTypes(success, toast) {
	var xmlhttp = new XMLHttpRequest();
	var title = "Fetch Question Types"
	xmlhttp.onreadystatechange = function() {
		if (xmlhttp.readyState === XMLHttpRequest.DONE && xmlhttp.status !== 200) {
			toast(title, xmlhttp.status + " " + xmlhttp.responseText, "error");
		}
		if (xmlhttp.readyState === XMLHttpRequest.DONE && xmlhttp.status === 200) {
			success(xmlhttp.response);
		}
	};
	xmlhttp.onerror = function() {
		toast(title, "Could not contact the server to fetch question types", "error");
	};
	xmlhttp.open("GET", "http://localhost:8090/api/Question/GetQuestionTypes");
	xmlhttp.send();
}

export function getQuestions(success, toast) {
	var xmlhttp = new XMLHttpRequest();
	var title = "Fetch Questions";
	xmlhttp.onreadystatechange = function() {
		if (xmlhttp.readyState === XMLHttpRequest.DONE && xmlhttp.status !== 200) {
			toast(title, xmlhttp.status + " " + xmlhttp.responseText, "error");
		}
		if (xmlhttp.readyState === XMLHttpRequest.DONE && xmlhttp.status === 200) {
			success(xmlhttp.response);
		}
	};
	xmlhttp.onerror = function() {
		toast(title, "Could not contact the server to fetch questions", "error");
	};
	xmlhttp.open("GET", "http://localhost:8090/api/Question/GetQuestions");
	xmlhttp.send();
}

export function createQuestion(data, success, toast) {
	var xmlhttp = new XMLHttpRequest();
	var title = "Create Question"
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
		toast(title, "Could not contact the server to create the question", "error");
	};
	xmlhttp.open("POST", "http://localhost:8090/api/Question/AddQuestion");
	xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
	xmlhttp.send(JSON.stringify(data));
}