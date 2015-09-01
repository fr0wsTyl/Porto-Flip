function profileRedirect(isLogged) {
	if (isLogged) {
		if (localStorage.getItem('Parse/OxNzrzXTEVzRxH9qHpel84j4dD8QJs4aFUbmrWYc/currentUser') !== null) {
			document.location.href = './profile.html';
		}
	}
	else {
		if (localStorage.getItem('Parse/OxNzrzXTEVzRxH9qHpel84j4dD8QJs4aFUbmrWYc/currentUser') === null) {
			document.location.href = './index.html';
		}
	}
}

export {
	profileRedirect
}