/*** THIS IS NOT FINISHED OR WORKING CODE ***/

function addResults() {
	var ul, obj, i;
	obj = JSON.parse(req.response); //!
	table = createElement("");
	for (i = 0; i < obj.length; i++) {
		addEntry(table, obj[i]);
	}
	getElementById
}

function addEntry(table, data) {
	var row, row_entries;
	row_entries = ["subj", "", "name"];
	row = createElement("tr");
	createElement
}


// AJAX
var req;
function sendAJAXRequest() {
	req = new XMLHttpRequest();
	req.open('POST', 'file.php', true); // GET or POST?
	req.setRequestHeader("Content-Type", "application/json",) // mb.
	req.onload = addResults;
	req.send();
}
