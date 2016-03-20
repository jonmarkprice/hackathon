/*** THIS IS NOT FINISHED OR WORKING CODE ***/

function addResults() {
	var obj, i;
	obj = JSON.parse(req.response),
	for (i = 0; i < obj.length; i++) {
		addBook(obj[i]);
	}
}

function addBook(data) {
	//var 
	createElement("ul");
}

function sendAJAXRequest() {
	var req = new XMLHttpRequest();
	req.open('POST', '', true); // GET or POST?
	req.setRequestHeader("Content-Type", "application/json",) // mb.
	req.onload = addResults;
	req.send();
}
