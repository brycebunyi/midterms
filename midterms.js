function getAnswer() {
	var a = document.getElementById('a').value;
	var b = document.getElementById('b').value;
	var c = document.getElementById('c').value;

	
	for (var i = a; i <= b; i++) {
			document.write(i+" * "+c+" = "+ i*c+"<br/>");
	}
}