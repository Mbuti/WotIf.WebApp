export function displayToast(title, message, type) {
	switch(type)
	{
		case "success":
			this.refs.container.error(message, title, {
				closeButton: true,
			});
			break;

		case "error":
			this.refs.container.error(message, title, {
				closeButton: true,
			});
			break;
	}
}