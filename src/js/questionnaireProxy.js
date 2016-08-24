export function getQuestionnaire(surveyId, success, toast) {
	var xmlhttp = new XMLHttpRequest();
	var title = "Fetch Questionnaire"
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