document.getElementById('in_text').onchange = function(e) {
	var ctx = document.getElementById('canvas').getContext("2d");

	for (i, c in e.target.value)
      alert(c);

};
