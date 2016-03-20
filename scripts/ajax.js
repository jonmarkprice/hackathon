/*** THIS IS NOT FINISHED OR WORKING CODE ***/

function addResults() {
	var ul, obj, i;
	obj = JSON.parse(req.response); //!
}


// AJAX
var req;
function sendAJAXRequest() {
	req = new XMLHttpRequest();
	req.open('POST', '../lib/template.json', true); // GET or POST?
	req.setRequestHeader("Content-Type", "application/json",) // mb.
	req.onload = addResults;
	req.send();
}
