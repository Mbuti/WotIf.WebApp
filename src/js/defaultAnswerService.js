export function getDefaultAnswer(questionType) {
	switch(questionType) {
		case "YesNo":
			return true;

		case "Decimal":
			return 0.0;

		case "Integer":
			return 0;

		case "Money":
			return 0.00;

		case "Text":
			return "";
	}
}