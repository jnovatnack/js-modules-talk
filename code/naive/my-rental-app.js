function displayRentalInfo(productResponse) {
	var nightlyCostElement = document.getElementById('nightly-cost'),
			currencyFormatter = new CurrencyFormatter();
	nightlyCostElement.innerText = currencyFormatter.format(productResponse.cost, 'US');
}