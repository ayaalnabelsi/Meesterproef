	let fontSize = 1.5;

	document.getElementById('txt-groter').addEventListener('click', function() {
		fontSize += 0.1;
    	document.body.style.fontSize = fontSize + 'em';
	});

	document.getElementById('txt-kleiner').addEventListener('click', function() {
		fontSize -= 0.1;
    	document.body.style.fontSize = fontSize + 'em';
	});