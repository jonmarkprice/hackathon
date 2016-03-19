window.onload {
	var buyButton = document.getElementById('buy_button');
	buyButton.onclick = buyFunction;

	var sellButton = document.getElementById('sell_button');
	sellButton.onclick = sellFunction;
}

function buyFunction() {
	var buyInfo = document.getElementById('buy_info');	
	buyInfo.style.display = '';
	var sellInfo = document.getElementById('sell_info');
	sellInfo.style.display = 'none';
}

function sellFunction() {
	var buyInfo = document.getElementById('buy_info');	
	buyInfo.style.display = 'none';
	var sellInfo = document.getElementById('sell_info');
	sellInfo.style.display = '';
}