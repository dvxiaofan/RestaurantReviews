
function handleSuccess() {
	const data = JSON.parse(this.responseText);
}

function hadleError() {
	console.log('error');	
}

const rqe = new XMLHttpRequest();
rqe.open('GET', 'https://unsplash.com');
rqe.onload = handleSuccess;
rqe.onerror = hadleError;
rqe.send();