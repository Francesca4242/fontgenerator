
const loadImage = path =>
    new Promise(resolve => {
        const img = new Image();
        img.onload = () => resolve(img);
        img.onerror = () => {throw "image load failed"};

        img.src = path;
    });



document.getElementById('in_text').onchange = function(e) {
	var canvas = document.getElementById('canvas');
	var ctx = canvas.getContext("2d");

	ctx.clearRect(0, 0, canvas.width, canvas.height);

    let xPos = 0;
	for (let c of e.target.value) {
		let thisXPos = xPos;
		c = c.toUpperCase();
		if (c>='A' && c <= 'Z')
		  loadImage('font_src/'+c.toUpperCase()+'.jpg').then(i => ctx.drawImage(i, thisXPos, 0, 100, 100));
	    xPos += 100;
	}
      

};
