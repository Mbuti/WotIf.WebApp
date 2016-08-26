export function getSurveys(success, toast) {
	var xmlhttp = new XMLHttpRequest();
	var title = "Fetch Surveys";
	xmlhttp.onreadystatechange = function() {
		if (xmlhttp.readyState === XMLHttpRequest.DONE && xmlhttp.status !== 200) {
			toast(title, xmlhttp.status + " " + xmlhttp.responseText, "error");
		}
		if (xmlhttp.readyState === XMLHttpRequest.DONE && xmlhttp.status === 200) {
			success(xmlhttp.response);
		}
	};
	xmlhttp.onerror = function() {
		toast(title, "Could not contact the server to fetch surveys", "error");
	};
	xmlhttp.open("GET", "http://localhost:8090/api/Survey/GetSurveys");
	xmlhttp.send();
}

export function createSurvey(data, success, toast) {
	var xmlhttp = new XMLHttpRequest();
	var title = "Create Survey";
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
		toast(title, "Could not contact the server to create the survey", "error");
	};
	xmlhttp.open("POST", "http://localhost:8090/api/Survey/Create");
	xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
	xmlhttp.send(JSON.stringify(data));
}