window.onload = function() {
	var buyButton = document.getElementById('buy_button');
	buyButton.onclick = buyFunction;

	var sellButton = document.getElementById('sell_button');
	sellButton.onclick = sellFunction;

	var findBookButton = document.getElementById('find_book_button');
	findBookButton.onclick = findBookButtonFunction;
}

function buyFunction() {
	var buyInfo = document.getElementById('buy_info');	
	buyInfo.style.display = 'block';
	var sellInfo = document.getElementById('sell_info');
	sellInfo.style.display = 'none';
}

function sellFunction() {
	var buyInfo = document.getElementById('buy_info');	
	buyInfo.style.display = 'none';
	var sellInfo = document.getElementById('sell_info');
	sellInfo.style.display = 'block';
	var searchResult = document.getElementById('search_result');
	searchResult.style.display = 'none';
}

function findBookButtonFunction() {
	var searchResult = document.getElementById('search_result');
	searchResult.style.display = 'block';
}